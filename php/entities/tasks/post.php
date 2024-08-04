<?php

function MakeTask($content){
    require_once __DIR__ . "/../../database/connection.php";
    require_once __DIR__ . "/../users/auth.php";

    if(!auth()){
        return "token";
    };


    $databaseConnection = getDatabaseConnection();

    $NewTask = $databaseConnection->prepare("
        INSERT INTO tasks(
            description
        ) VALUES (
            :desc
        );
    ");

    $NewTask->execute([
        "desc" => htmlspecialchars($content),
    ]);
};

?>