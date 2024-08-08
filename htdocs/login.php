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
        require_once __DIR__ . "/libraries/body.php";
        require_once __DIR__ . "/libraries/response.php";
        require_once __DIR__ . "/entities/adherent/login.php";

        $body = getBody();

        if(!array_key_exists("email", $body) || !array_key_exists("password", $body)){
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "user" => null,
                "error" => "email or password not found"
            ]);
            return;
        };

        $res = login($body["email"], $body["password"]);

        if ($res) {
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "user" => $res,
                "error" => null
            ]);      
        } else {
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => false,
                "user" => null,
                "error" => "Bad email or password"
            ]);
        };
        break;
    default:
        echo jsonResponse(405, ["Content-Type: application/json"], [
            "success" => false,
            "user" => null,
            "error" => "Method not allowed"
        ]);
        break;
}