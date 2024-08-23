<?php

function MakeCommercant($content){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    // INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 1', '2024-08-12 00:00:00', 1, '2024-08-13 00:00:00', 52.52, 13.405, 'Terminee');

    $NewTask = $databaseConnection->prepare("
        INSERT INTO Livraison(
            title, Depart, Entrepot, Arrivee, Arrivelat, Arrivelong, Statut
        ) VALUES (
            :title, :Depart, :Entrepot, :Arrivee, :Arrivelat, :Arrivelong, :Statut
        );
    ");

    $NewTask->execute([
        "title" => htmlspecialchars($content["title"]),
        "Depart" => htmlspecialchars($content["Depart"]),
        "Entrepot" => htmlspecialchars($content["Entrepot"]),
        "Arrivee" => htmlspecialchars($content["Arrivee"]),
        "Arrivelat" => htmlspecialchars($content["Arrivelat"]),
        "Arrivelong" => htmlspecialchars($content["Arrivelong"]),
        "Statut" => htmlspecialchars($content["Statut"]),
    ]);

    return $databaseConnection->lastInsertId();
};

?>