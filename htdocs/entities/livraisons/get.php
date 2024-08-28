<?php

function getLivraisons(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT livraison.title, livraison.depart, livraison.entrepot, livraison.arrivee, entrepot.ville, entrepot.pays, entrepot.latitude, entrepot.longitude, livraison.arrivelat, livraison.arrivelong, livraison.statut, livraison.id from livraison JOIN entrepot on livraison.entrepot = entrepot.id");
    $livraisons = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    $databaseConnection = getDatabaseConnection();
    $Getperks = $databaseConnection->query("SELECT stock.item, stock.quantite, palette.quantite as removed, livraison.id from stock JOIN palette on stock.id = palette.stock JOIN livraison on palette.livraison = livraison.id");
    $stocks = $Getperks->fetchAll(PDO::FETCH_ASSOC);

    $tmp = [];
    foreach ($livraisons as $key => $livraison) {
        $tmp[$livraison['title']] = $livraison;
        $tmp[$livraison['title']]['stocks'] = [];
        foreach ($stocks as $stock) {
            if ($stock['id'] == $livraison['id']) {
                $tmp[$livraison['title']]['stocks'][] = $stock;
            }
        }
    }

    $result = [];
    foreach ($tmp as $key => $value) {
        $result[] = $value;
    }

    return $result;
};

?>