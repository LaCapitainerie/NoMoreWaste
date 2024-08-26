<?php

function getCommercant(int $offset, int $limit) {
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();  
    $GetAdherent = $databaseConnection->query("SELECT commercant.id, commercant.Nom, commercant.Adresse, Adherent.Mail as extern_Mail, Adherent.Ville as extern_Ville FROM commercant JOIN adherent ON commercant.Referent = adherent.id LIMIT $offset, $limit;");
    $Adherent = $GetAdherent->fetchAll(PDO::FETCH_ASSOC);

    return $Adherent;
};

?>