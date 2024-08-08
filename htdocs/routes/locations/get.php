<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/locations/get.php";

try {
    $res = getLocations();

    switch ($res) {
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "Locations" => $res
            ]);
            break;
    };

} catch (Exception $exception) {
    echo jsonResponse(500, [], [
        "success" => false,
        "error" => $exception->getMessage()
    ]);
};

?>