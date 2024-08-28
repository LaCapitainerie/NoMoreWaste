<?php

function getPerks(){

    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    
    $GetAbonnement = $databaseConnection->query("SELECT * FROM `abonnement` ORDER BY `abonnement`.`prixMois` ASC");
    $Abonnement = $GetAbonnement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($Abonnement as $key => $value) {

        $Getperks = $databaseConnection->query("SELECT nom, abonnement FROM perks Where abonnement = '".$value["Nom"]."'");
        $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);
        
        $Abonnement[$key]["perks"] = $Perks;
    }

    return $Abonnement;
};