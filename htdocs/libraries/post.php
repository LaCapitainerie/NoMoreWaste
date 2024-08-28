<?

function post(string $table, array $body) {
    require_once __DIR__ . "/../database/connection.php";

    $conn = getDatabaseConnection();

    $fields = "";
    $values = "";

    foreach ($body as $key => $value) {
        if ($key == "id") continue;
        $fields .= $key . ",";
        $values .= "'" . $value . "',";
    }

    $fields = substr($fields, 0, -1);
    $values = substr($values, 0, -1);

    $sql = "INSERT INTO $table ($fields) VALUES ($values)";

    $res = $conn->query($sql) === TRUE ? "ok" : "error";

    return $res;

};