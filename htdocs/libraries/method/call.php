<?php

function callMethod(string $method, string $table, ?array $needed, ?array $body){
    
    require_once __DIR__ . "/../body.php";
    require_once __DIR__ . "/../response.php";

    $key = $needed;

    if( ($method == "post" || $method == "put" || $method == "delete") && !checkBody($body, $key)) {
        echo jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "result" => null,
            "error" => "Bad request, excepted keys: ".implode(", ", $key)." in body, received: ".implode(", ", array_keys($body))
        ]);
        return;
    };

    require_once __DIR__ . "/return.php";

    switch ($method){
        case 'get':
            require_once __DIR__ . "/../get.php";
            get($table);
            break;

        case 'put':
            require_once __DIR__ . "/../put.php";
            ReturnState(put($table, $body));
            break;
        case 'post':
            require_once __DIR__ . "/../post.php";
            ReturnState(post($table, $body));
            break;
        // case 'delete':
        //     $res = delete($table, $body);
        //     break;
        default:
            echo jsonResponse(405, ["Content-Type: application/json"], [
                "success" => false,
                "result" => null,
                "error" => "Method not allowed"
            ]);
            return;
    };

}