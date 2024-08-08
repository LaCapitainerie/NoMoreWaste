<?php

function getPerks(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT * FROM Perks;");
    $Perks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    $GetPerks = $databaseConnection->query("SELECT * FROM Abonnement;");
    $Abos = $GetPerks->fetchAll(PDO::FETCH_ASSOC);

    // Group by
    $res = [];
    foreach ($Abos as $Abo) {
        $res[$Abo["Nom"]] = ["Nom" => $Abo["Nom"], "PrixMois" => $Abo["PrixMois"], "PrixAn" => $Abo["PrixAn"], "Description" => $Abo["Description"], "Perks" => []];
    };
    foreach ($Perks as $Perk) {
        array_push($res[$Perk["Abonnement"]]["Perks"], $Perk);
    };

    return $res;
};

?>