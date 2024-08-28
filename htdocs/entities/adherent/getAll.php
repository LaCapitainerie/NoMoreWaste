<?php

function getAdherent(int $offset, int $limit) {

    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $GetAdherent = $databaseConnection->query("SELECT id, abonnement, prenom, nom, mail, ville, Service FROM adherent LIMIT $offset, $limit;");
    $Adherent = $GetAdherent->fetchAll(PDO::FETCH_ASSOC);

    return $Adherent;
};

?>