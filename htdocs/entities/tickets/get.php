<?php

function getTickets(){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();
    $GetTickets = $databaseConnection->query("SELECT * FROM ticket;");
    $Tickets = $GetTickets->fetchAll(PDO::FETCH_ASSOC);

    return $Tickets;
};

?>