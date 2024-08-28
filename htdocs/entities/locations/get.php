<?php

function getLocations(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT latitude, longitude FROM entrepot;");
    $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    return $Perks;
};

?>