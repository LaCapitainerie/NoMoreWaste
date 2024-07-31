<?php
// File: /api/src/models/User.php

class Adhérent {
    private $conn;
    private $table_name = "Adhérent";

    public $id integer;
    public $Password string;
    public $Abonnement string;
    public $Prénom string;
    public $Nom string;
    public $Mail string;
    public $Ville string;
    public $Service string;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function register() {
        $query = "INSERT INTO " . $this->table_name . " SET Mail=:Mail, Password=:Password";

        $stmt = $this->conn->prepare($query);

        $this->Mail = htmlspecialchars(strip_tags($this->Mail));
        $this->Password = htmlspecialchars(strip_tags($this->Password));

        $stmt->bindParam(':Mail', $this->Mail);
        $stmt->bindParam(':Password', $this->Password);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function login() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Mail = ? LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->Mail);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($this->Password, $user['Password'])) {
            return $user;
        }

        return false;
    }

    public function getUserById($id) {
        $query = "SELECT id, Mail FROM " . $this->table_name . " WHERE id = ? LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>
