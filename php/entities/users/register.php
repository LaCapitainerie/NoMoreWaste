<?php

function register(string $email, string $password){
    if(strlen($password) < 8) return "short";
    

    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    # Verification des doublons
    $getUsersQuery = $databaseConnection->prepare("SELECT COUNT(*) as c FROM users WHERE email = :email;");
    $getUsersQuery->execute([ "email" => htmlspecialchars($email) ]);
    $res = $getUsersQuery->fetch(PDO::FETCH_ASSOC);

    if($res['c'] != '0') return "doublon";



    $createUserQuery = $databaseConnection->prepare("
        INSERT INTO users(
            email,
            password
        ) VALUES (
            :email,
            :password
        );
    ");

    $createUserQuery->execute([
        "email" => htmlspecialchars($email),
        "password" => password_hash(htmlspecialchars($password), PASSWORD_BCRYPT)
    ]);
    
    return "true";
};

?>