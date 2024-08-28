<?php

function deleteTask($id){
    require_once __DIR__ . "/../../database/connection.php";
    require_once __DIR__ . "/../adherent/auth.php";

    // if(!auth()){
    //     return "token";
    // };

    $databaseConnection = getDatabaseConnection();
    $SearchTask = $databaseConnection->prepare("SELECT * FROM perks WHERE id = :id");

    $SearchTask->execute([
        "id" => $id
    ]);

    $res = $SearchTask->fetchAll(PDO::FETCH_ASSOC);

    if(count($res) == 0) return "count";


    $DeleteTask = $databaseConnection->prepare("DELETE FROM `perks` WHERE id = :id");

    $DeleteTask->execute([
        "id" => $id
    ]);

    return "true";
};

?>