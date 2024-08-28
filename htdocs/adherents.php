<?php

require_once __DIR__ . "/libraries/body.php";
require_once __DIR__ . "/libraries/response.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Bearer");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        require_once __DIR__ . "/entities/adherent/auth.php";

        // if(!auth()) {
        //     echo jsonResponse(401, ["Content-Type: application/json"], [
        //         "success" => false,
        //         "result" => null,
        //         "error" => "Unauthorized"
        //     ]);
        //     break;
        // };

        require_once __DIR__ . "/entities/adherent/getAll.php";

        $offset = $_GET["offset"] ?? 0;
        $limit = $_GET["limit"] ?? 20;

        $res = getAdherent($offset, $limit);

        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $res
        ]);
        break;
    case 'POST':
        handlePostRequest();
        break;

    case 'PUT':
        require_once __DIR__ . "/entities/adherent/update.php";
        $data = getBody();
        $res = updateAdherent($data);
        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $res
        ]);
        break;

    default:
        echo json_encode(["message" => "Method ".$requestMethod." not allowed"]);
        http_response_code(405);
        break;
}

function handlePostRequest() {

    $data = getBody();

    $response = [
        "message" => "Received data successfully",
        "receivedData" => $data
    ];
    echo json_encode($response);
}
?>