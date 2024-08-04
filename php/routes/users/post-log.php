<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/users/login.php";

try {
    $body = getBody();

    if(!array_key_exists("email", $body) || !array_key_exists("password", $body)){
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "email or password not found"
        ]);
        return;
    };

    $res = login($body["email"], $body["password"]);

    if ($res) {
        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "token" => $res
        ]);      
    } else {
        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "Bad email or password"
        ]);
    };

} catch (Exception $exception) {
    echo jsonResponse(500, ["Content-Type: application/json"], [
        "success" => false,
        "error" => $exception->getMessage()
    ]);
}

?>