<?php

function getLivraisons(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT * from livraison JOIN entrepot on livraison.entrepot = entrepot.id");
    $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    return $Perks;
};

?>