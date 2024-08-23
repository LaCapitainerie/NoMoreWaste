<?
function put(string $table, array $body): string {
    $sql = "UPDATE $table SET ";

    foreach ($body as $key => $value) {
        $sql .= "$key = '$value', ";
    };

    $sql = rtrim($sql, ', ');

    $sql .= " WHERE id = $body[id]";


    require_once __DIR__ . "/../database/connection.php";

    try {
        $databaseConnection = getDatabaseConnection();

        
        echo jsonResponse(200, ["Content-Type: application/json"], [
            "success" => true,
            "result" => $sql
        ]);

        $NewTask = $databaseConnection->prepare($sql);

        $NewTask->execute();

        return "ok";

    } catch (Exception $e) {
        return $e;
    };

};