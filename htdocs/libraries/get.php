<?php

function get(string $table) {
    require_once __DIR__ . "/../database/connection.php";

    $sql = "SELECT * FROM $table";

    try {
        $databaseConnection = getDatabaseConnection();

        $NewTask = $databaseConnection->prepare($sql);

        $NewTask->execute([]);

        $result = $NewTask->fetchAll(PDO::FETCH_ASSOC);

        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $result,
            "error" => null
        ]);

        return;

    } catch (Exception $e) {
        echo jsonResponse(500, ["Content-Type: application/json"], [
            "success" => false,
            "result" => null,
            "error" => "Internal Server Error"
        ]);
        return;
    };
};