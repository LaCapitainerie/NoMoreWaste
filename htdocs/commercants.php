<?php

require_once __DIR__ . "/libraries/body.php";
require_once __DIR__ . "/libraries/response.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Bearer");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        
        require_once __DIR__ . "/entities/adherent/auth.php";

        require_once __DIR__ . "/entities/commercant/getAll.php";

        $offset = $_GET["offset"] ?? 0;
        $limit = $_GET["limit"] ?? 10;

        $res = getCommercant($offset, $limit);

        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $res
        ]);
        break;
    case 'POST':
        require_once __DIR__ . "/libraries/method/call.php";
        callMethod("post", "commercant", ["nom", "adresse", "referent"], getBody());
        break;

        
    default:
        echo json_encode(["message" => "Method ".$requestMethod." not allowed"]);
        http_response_code(405);
        break;
}
