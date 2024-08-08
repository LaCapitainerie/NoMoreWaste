<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch ($requestMethod) {
    case 'OPTIONS':
        break;
    case 'POST':
        require_once __DIR__ . "/routes/adherent/register.php";
        break;
    default:
        echo jsonResponse(405, ["Content-Type: application/json"], [
            "success" => false,
            "user" => null,
            "error" => "Method not allowed"
        ]);
        break;
}