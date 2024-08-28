<?php

function patchTask($id, $desc){
    if(!$desc || $desc == ""){
        return "empty";
    };

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

    
    $PatchTask = $databaseConnection->prepare("UPDATE `perks` SET `description`=:desc WHERE id = :id");

    $PatchTask->execute([
        ":desc" => $desc,
        "id" => $id
    ]);

    return "true";
};

?>