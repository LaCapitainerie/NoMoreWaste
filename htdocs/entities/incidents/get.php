<?php

function getIncidents(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT * FROM ticket;");
    $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    return $Perks;
};

?>