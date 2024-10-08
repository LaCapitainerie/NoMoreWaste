<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Bearer");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'GET':
        require_once __DIR__ . "/routes/perks/get.php";
        break;
    case 'POST':
        require_once __DIR__ . "/routes/perks/post.php";
        break;
    default:
        echo json_encode(["message" => "Method not allowed"]);
        http_response_code(405);
        break;
}