<?php

function MakeLivraison($content){
    require_once __DIR__ . "/../../database/connection.php";
    // require_once __DIR__ . "/../adherent/auth.php";

    // if(!auth()){
    //     return "token";
    // };


    $databaseConnection = getDatabaseConnection();

    // INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 1', '2024-08-12 00:00:00', 1, '2024-08-13 00:00:00', 52.52, 13.405, 'Terminee');

    $NewTask = $databaseConnection->prepare("
        INSERT INTO Livraison(
            title, depart, entrepot, arrivee, arrivelat, arrivelong, statut
        ) VALUES (
            :title, :Depart, :Entrepot, :Arrivee, :Arrivelat, :Arrivelong, :Statut
        );
    ");

    $NewTask->execute([
        "title" => htmlspecialchars($content["title"]),
        "depart" => htmlspecialchars($content["Depart"]),
        "entrepot" => htmlspecialchars($content["Entrepot"]),
        "arrivee" => htmlspecialchars($content["Arrivee"]),
        "arrivelat" => htmlspecialchars($content["Arrivelat"]),
        "arrivelong" => htmlspecialchars($content["Arrivelong"]),
        "statut" => htmlspecialchars($content["Statut"]),
    ]);

    return $databaseConnection->lastInsertId();
};

?>