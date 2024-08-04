<?php

function login(string $email, string $password){
    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    $getUserQuery = $databaseConnection->prepare("SELECT id, password FROM users WHERE email = :email");

    $success = $getUserQuery->execute([
        "email" => $email
    ]);

    if (!$success) { return false; };

    $user = $getUserQuery->fetch(PDO::FETCH_ASSOC);

    if (!$user) { return false; };

    $isPasswordValid = password_verify($password, $user["password"]);

    if (!$isPasswordValid) { return false; };


    function generateRandomString($length = 10) {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    };

    $token = generateRandomString(10);

    $getUserQuery = $databaseConnection->prepare("UPDATE `users` SET `token`= :token WHERE email = :email");

    $success = $getUserQuery->execute([
        "token" => $token,
        "email" => $email,
    ]);

    if (!$success) { return false; };

    $user = $getUserQuery->fetch(PDO::FETCH_ASSOC);
    

    return $token;
};

?>