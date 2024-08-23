<?php

function getBody()
{
    return json_decode(file_get_contents("php://input"), true);
}

function checkBody($body, $key)
{
    foreach ($key as $k) {
        if (!array_key_exists($k, $body)) {
            return false;
        }
    }
    return true;
}