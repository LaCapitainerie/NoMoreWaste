<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../libraries/parameters.php";
require_once __DIR__ . "/../../entities/tasks/delete.php";

try {
    $parameters = getParametersForRoute("/tasks/:task");
    $id = $parameters["task"];
    $res = deleteTask($id);

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
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "message" => "deleted"
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