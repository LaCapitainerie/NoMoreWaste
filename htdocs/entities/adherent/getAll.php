<?php

function getAdherent(int $offset, int $limit) {
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $GetAdherent = $databaseConnection->query("SELECT id, Abonnement, Prenom, Nom, Mail, Ville, Service FROM Adherent LIMIT $offset, $limit;");
    $Adherent = $GetAdherent->fetchAll(PDO::FETCH_ASSOC);

    return $Adherent;
};

?>