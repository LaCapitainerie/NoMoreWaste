<?
require_once __DIR__ . "/../../libraries/body.php";
require_once __DIR__ . "/../../libraries/response.php";

$body = getBody();

$key = ["email", "password"];

if(!checkBody($body, $key)) {
    echo jsonResponse(400, ["Content-Type: application/json"], [
        "success" => false,
        "result" => null,
        "error" => "Bad request"
    ]);
    return;
};

$res = login($body["email"], $body["password"]);

if ($res) {
    echo jsonResponse(200, ["Content-Type: application/json"], [
        "success" => true,
        "user" => $res,
        "error" => null
    ]);      
} else {
    echo jsonResponse(200, ["Content-Type: application/json"], [
        "success" => false,
        "user" => null,
        "error" => "Bad email or password"
    ]);
};
break;