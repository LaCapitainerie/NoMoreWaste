<?php

require_once __DIR__ . "./../../database/connection.php";

$databaseConnection = getDatabaseConnection();
$GetTickets = $databaseConnection->query("SELECT * FROM ticket;");
$Tickets = $GetTickets->fetchAll(PDO::FETCH_ASSOC);


http_response_code(200);
echo json_encode([
    "success" => true,
    "Tickets" => $Tickets
]);

?>