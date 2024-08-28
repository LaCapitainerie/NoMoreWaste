<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/adherent/login.php";

try {
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
        echo jsonResponse(401, ["Content-Type: application/json"], [
            "success" => false,
            "user" => null,
            "error" => "Bad email or password"
        ]);
    };

} catch (Exception $exception) {
    echo jsonResponse(500, ["Content-Type: application/json"], [
        "success" => false,
        "user" => null,
        "error" => $exception->getMessage()
    ]);
}

?>