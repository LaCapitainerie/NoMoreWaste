<?php

function getTasks(){
    require_once __DIR__ . "/../../database/connection.php";
    require_once __DIR__ . "/../users/auth.php";

    if(!auth()){
        return "token";
    };

    $databaseConnection = getDatabaseConnection();
    $GetTasks = $databaseConnection->query("SELECT * FROM tasks;");
    $res = $GetTasks->fetchAll(PDO::FETCH_ASSOC);
    if(count($res) == 0) return "count";

    return $res;
};

?>