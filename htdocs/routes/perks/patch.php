<?php

require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../libraries/parameters.php";
require_once __DIR__ . "/../../entities/perks/patch.php";

try {
    $body = getBody();
    $parameters = getParametersForRoute("/perks/:task");
    $id = $parameters["task"];

    if($body == null || $id == null){
        echo jsonResponse(500, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "Body or id not found"
        ]);
        return;
    };

    if(!array_key_exists("description", $body)){
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "Description is mandatory"
        ]);
        return;
    };


    $res = patchTask($id, $body["description"]);

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
                "message" => "Task not found"
            ]);
            break;

        case "mandatory":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "Description is mandatory"
            ]);
            break;

        case "empty":
            echo jsonResponse(400, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "Description cannot be empty"
            ]);
            break;
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "message" => "updated"
            ]);
            break;
    };
} catch (Exception $exception) {
    echo jsonResponse(200, [], [
        "success" => false,
        "error" => $exception->getMessage()
    ]);
};

?>