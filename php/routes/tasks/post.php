<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/tasks/post.php";

try {
    $body = getBody();

    if(!array_key_exists("description", $body)){
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "Description not found"
        ]);
        return;
    };

    if(!is_string($body["description"])){
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "Description is not a string"
        ]);
        return;
    };

    $res = MakeTask($body["description"]);

    switch ($res) {
        case 'token':
            echo jsonResponse(401, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "Provide an Authorization: Bearer token"
            ]);
            break;

        case 'count':
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "No tasks found"
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
    echo jsonResponse(500, [], [
        "success" => false,
        "error" => $exception->getMessage()
    ]);
};

?>