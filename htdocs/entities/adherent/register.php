<?php

function register(string $email, string $password, string $firstname, string $lastname){
    if(strlen($password) < 8) return "short";
    

    require_once __DIR__ . "/../../database/connection.php";

    $databaseConnection = getDatabaseConnection();

    # Verification des doublons
    $getAdherentQuery = $databaseConnection->prepare("SELECT COUNT(*) as c FROM adherent WHERE Mail = :email;");
    $getAdherentQuery->execute([ "email" => htmlspecialchars($email) ]);
    $res = $getAdherentQuery->fetch(PDO::FETCH_ASSOC);

    if($res['c'] != '0') return "doublon";



    $createUserQuery = $databaseConnection->prepare("
        INSERT INTO adherent(
            Mail,
            Password,
            Prenom,
            Nom
        ) VALUES (
            :email,
            :password,
            :firstname,
            :lastname
        );
    ");

    $createUserQuery->execute([
        "email" => htmlspecialchars($email),
        "password" => password_hash(htmlspecialchars($password), PASSWORD_BCRYPT),
        "firstname" => htmlspecialchars($firstname),
        "lastname" => htmlspecialchars($lastname)
    ]);
    
    return "true";
};

?>