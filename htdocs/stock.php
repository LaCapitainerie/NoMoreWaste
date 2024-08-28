<?php

require_once __DIR__ . "/libraries/body.php";
require_once __DIR__ . "/libraries/response.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Bearer");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        require_once __DIR__ . "/database/connection.php";
    
        $databaseConnection = getDatabaseConnection();
        $Getperks = $databaseConnection->query("SELECT stock.item, stock.quantite, entrepot.pays, entrepot.ville, entrepot.id as extern_id FROM stock JOIN entrepot ON stock.entrepot = entrepot.id;");
        $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);
    
        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $Perks,
            "error" => null
        ]); 
        break;
    case 'POST':
        handlePostRequest();
        break;
    default:
        echo json_encode(["message" => "Method not allowed"]);
        http_response_code(405);
        break;
}

function handleGetRequest() {
    $data = [
        "message" => "This is a GET request",
        "timestamp" => time()
    ];
    echo json_encode($data);
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