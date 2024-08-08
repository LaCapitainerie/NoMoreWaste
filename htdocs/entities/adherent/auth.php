<?php

function auth(){
    $headers = getallheaders();
    $authorizationHeader = $headers["Authorization"];
    $authorizationParts = explode(" ", $authorizationHeader);

    if (!isset($authorizationParts[0]) || !isset($authorizationParts[1])) { return false; };

    $authorizationType = $authorizationParts[0];
    $bearerToken = $authorizationParts[1];

    if ($authorizationType !== "Bearer") { return false; };

    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    $getUserQuery = $databaseConnection = $databaseConnection->prepare("SELECT id FROM adherent WHERE token = :token");

    $success = $getUserQuery->execute([
        "token" => $bearerToken
    ]);

    if (!$success) { return false; };

    $user = $getUserQuery->fetch(PDO::FETCH_ASSOC);

    if (!$user) { return false; };

    return true;
};

?>