<?php

function getPerks(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT * FROM perks;");
    $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    $GetPerks = $databaseConnection->query("SELECT * FROM abonnement;");
    $Abos = $GetPerks->fetchAll(PDO::FETCH_ASSOC);

    // Group by
    $res = [];
    foreach ($Abos as $Abo) {
        $res[$Abo["nom"]] = ["nom" => $Abo["nom"], "prixMois" => $Abo["prixMois"], "prixAn" => $Abo["prixAn"], "description" => $Abo["description"], "perks" => []];
    };
    foreach ($Perks as $Perk) {
        array_push($res[$Perk["abonnement"]]["perks"], $Perk);
    };

    return $res;
};

?>