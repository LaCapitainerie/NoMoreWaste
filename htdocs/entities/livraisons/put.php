<?

function UpdateLivraison($body){
    $sql = "UPDATE Livraison SET ";

    foreach ($body as $key => $value) {
        $sql .= "$key = '$value', ";
    };

    $sql = rtrim($sql, ', ');

    $sql .= " WHERE id = $body[id]";


    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    $NewTask = $databaseConnection->prepare($sql);

    $NewTask->execute();

    return "ok";
}