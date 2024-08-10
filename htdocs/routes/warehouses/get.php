<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/warehouses/get.php";

$res = getWarehouses();

echo jsonResponse(200, ["Content-Type: application/json"], [
    "success" => true,
    "result" => $res
]);