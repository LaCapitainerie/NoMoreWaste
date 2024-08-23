<?php

require_once __DIR__ . "/libraries/body.php";
require_once __DIR__ . "/libraries/method/call.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Bearer");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        require_once __DIR__ . "/routes/livraisons/get.php";
        break;

    case 'POST':
        require_once __DIR__ . "/routes/livraisons/post.php";
        break;

    case 'PUT':
        require_once __DIR__ . "/libraries/method/call.php";
        callMethod("put", "Livraison", ["id"], getBody());
        break;

    default:
        echo json_encode(["message" => "Method not allowed"]);
        http_response_code(405);
        break;
};