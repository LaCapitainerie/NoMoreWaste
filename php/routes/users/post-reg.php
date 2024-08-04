<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/users/register.php";

try {
    $body = getBody();

    $res = register($body["email"], $body["password"]);
    
    switch ($res) {
        case "short":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "error" => "password not strong enought"
            ]);
            break;

        case "doublon":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "error" => "password not strong enought"
            ]);
            break;
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "message" => "Created"
            ]);
            break;
    };

} catch (Exception $exception) {
    echo jsonResponse(500, ["Content-Type: application/json"], [
        "success" => false,
        "error" => $exception->getMessage()
    ]);
}

?>