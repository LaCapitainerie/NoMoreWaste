<?
require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";

$body = getBody();

$key = ["title", "Depart", "Entrepot", "Arrivee", "Arrivelat", "Arrivelong", "Statut"];

if(!checkBody($body, $key)) {
    echo jsonResponse(400, ["Content-Type: application/json"], [
        "success" => false,
        "result" => null,
        "error" => "Bad request"
    ]);
    return;
};

require_once __DIR__ . "/../../entities/livraisons/post.php";

$res = MakeLivraison($body);

if ($res === "token") {
    echo jsonResponse(401, ["Content-Type: application/json"], [
        "success" => false,
        "result" => null,
        "error" => "Unauthorized"
    ]);
    return;
};

if ($res) {
    echo jsonResponse(201, ["Content-Type: application/json"], [
        "success" => true,
        "result" => $res,
        "error" => null
    ]);
} else {
    echo jsonResponse(500, ["Content-Type: application/json"], [
        "success" => false,
        "result" => null,
        "error" => "Internal Server Error"
    ]);
};

?>