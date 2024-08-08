<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/adherent/register.php";

try {
    $body = json_decode(file_get_contents("php://input"), true);
    if ($body && isset($body["email"]) && isset($body["password"]) && isset($body["firstname"]) && isset($body["lastname"])) {
        if (!filter_var($body["email"], FILTER_VALIDATE_EMAIL)) {
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "user" => null,
                "error" => "Invalid email"
            ]);
            return;
        }
    } else {
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "user" => null,
            "error" => "Invalid input"
        ]);
        return;
    };

    $res = register($body["email"], $body["password"], $body["firstname"], $body["lastname"]);
    
    switch ($res) {
        case "short":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "user" => null,
                "error" => "password not strong enought"
            ]);
            break;

        case "doublon":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "user" => null,
                "error" => "email already used"
            ]);
            break;
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "user" => [
                    "firstname" => $body["firstname"],
                    "lastname" => $body["lastname"],
                    "email" => $body["email"]
                ],
                "error" => null
            ]);
            break;
    };

} catch (Exception $exception) {
    echo jsonResponse(500, ["Content-Type: application/json"], [
        "success" => false,
        "user" => null,
        "error" => $exception->getMessage()
    ]);
};

?>