<?php

require_once __DIR__ . "/connection.php";

try {
    $databaseConnection = getDatabaseConnection();
    $databaseConnection->query("CREATE TABLE `adherent` (`id` int(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,`Mail` varchar(50) NOT NULL,`password` char(60) NOT NULL,`token` char(60) DEFAULT NULL)");
    $databaseConnection->query("CREATE TABLE `perks` ( `id` int(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT, `description` longtext NOT NULL )");

    echo "Migration réussie" . PHP_EOL;
} catch (Exception $exception) {
    echo "Une erreur est survenue durant la migration des données" . PHP_EOL;
    echo $exception->getMessage();
}
