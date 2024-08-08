<?php

require_once __DIR__ . "/../../libraries/response.php";
require_once __DIR__ . "/../../entities/perks/get.php";

try {
    $res = getPerks();

    switch ($res) {
        
        default:
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "Perks" => $res
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