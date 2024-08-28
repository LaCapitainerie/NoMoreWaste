<?php

function updateAdherent(array $body){
    require_once __DIR__ . "/../../database/connection.php";

    if (!isset($body['id'])) {
        return jsonResponse(400, ["Content-Type: application/json"], [
            "success" => false,
            "message" => "ID is required"
        ]);
    }

    $id = $body['id'];
    unset($body['id']);

    // Construire dynamiquement la requête SQL
    $setPart = [];
    $parameters = [];
    foreach ($body as $column => $value) {
        $setPart[] = strtolower($column)." = ?";
        $parameters[] = $value;
    }
    $parameters[] = $id; // Ajoute l'ID à la fin des paramètres

    $setString = implode(", ", $setPart);

    try {
        $pdo = getDatabaseConnection();

        $sql = "UPDATE adherent SET $setString WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($parameters);

        // Vous pouvez récupérer les données mises à jour si nécessaire
        $stmt = $pdo->prepare("SELECT * FROM adherent WHERE id = ?");
        $stmt->execute([$id]);
        $res = $stmt->fetch(PDO::FETCH_ASSOC);

        return $res;
    } catch (PDOException $e) {
        return $e->getMessage();
    };
}
