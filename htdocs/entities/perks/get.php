<?php

function getPerks(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    
    $GetAbonnement = $databaseConnection->query("SELECT * FROM `abonnement` ORDER BY `abonnement`.`PrixMois` ASC");
    $Abonnement = $GetAbonnement->fetchAll(PDO::FETCH_ASSOC);


    foreach ($Abonnement as $key => $value) {

        $Getperks = $databaseConnection->query("SELECT Nom, Abonnement FROM perks Where Abonnement = '".$value["Nom"]."'");
        $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);
        
        $Abonnement[$key]["Perks"] = $Perks;
    }

    return $Abonnement;
};