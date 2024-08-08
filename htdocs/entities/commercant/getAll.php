<?php

function getCommercant(int $offset, int $limit) {
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();  
    $GetAdherent = $databaseConnection->query("SELECT Commercant.id, Commercant.Nom, Commercant.Adresse, Adherent.Mail as extern_Mail, Adherent.Ville as extern_Ville FROM Commercant JOIN Adherent ON Commercant.Referent = Adherent.id LIMIT $offset, $limit;");
    $Adherent = $GetAdherent->fetchAll(PDO::FETCH_ASSOC);

    return $Adherent;
};

?>