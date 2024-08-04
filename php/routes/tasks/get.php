<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/tasks/get.php";

try {
    $res = getTasks();

    switch ($res) {
        case 'token':
            echo jsonResponse(401, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "Provide an Authorization: Bearer token"
            ]);
            break;

        case 'count':
            echo jsonResponse(404, ["Content-Type: application/json"], [
                "success" => false,
                "message" => "No tasks found"
            ]);
            break;
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "tasks" => $res
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