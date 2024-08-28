<?php

function getCommercant(int $offset, int $limit) {
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();  
    $GetAdherent = $databaseConnection->query("SELECT commercant.id, commercant.nom, commercant.adresse, adherent.mail as extern_Mail, adherent.ville as extern_Ville FROM commercant JOIN adherent ON commercant.referent = adherent.id LIMIT $offset, $limit;");
    $Adherent = $GetAdherent->fetchAll(PDO::FETCH_ASSOC);

    return $Adherent;
};

?>