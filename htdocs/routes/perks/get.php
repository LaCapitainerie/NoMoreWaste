<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/perks/get.php";

$res = getPerks();

echo jsonResponse(200, ["Content-Type: application/json"], [
    "success" => true,
    "result" => $res
]);