<?php

require_once __DIR__ . "/libraries/body.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        handleGetRequest();
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