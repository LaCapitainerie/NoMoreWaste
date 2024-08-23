<?
require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";

$body = getBody();

$key = ["id"];

if(!checkBody($body, $key)) {
    echo jsonResponse(400, ["Content-Type: application/json"], [
        "success" => false,
        "result" => null,
        "error" => "Bad request"
    ]);
    return;
};

require_once __DIR__ . "/../../libraries/put.php";
require_once __DIR__ . "/../../libraries/method/return.php";

$res = put("Livraison", $body);

ReturnState($res);

?>