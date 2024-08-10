<?php

function getWarehouses(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    
    $GetWarehouses = $databaseConnection->query("SELECT * FROM entrepot");
    $Warehouses = $GetWarehouses->fetchAll(PDO::FETCH_ASSOC);

    return $Warehouses;
};