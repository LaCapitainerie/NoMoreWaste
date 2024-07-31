<?php
// File: /api/src/controllers/UserController.php

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../middleware/AuthMiddleware.php';
use Firebase\JWT\JWT;

class UserController {
    private $db;
    private $secretKey = 'your_secret_key';

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function register($data) {
        $user = new User($this->db);
        $user->username = $data['username'];
        $user->password = password_hash($data['password'], PASSWORD_BCRYPT);

        if ($user->register()) {
            return ['status' => 201, 'message' => 'User registered successfully'];
        } else {
            return ['status' => 400, 'error' => 'Username already exists'];
        }
    }

    public function login($data) {
        $user = new User($this->db);
        $user->username = $data['username'];
        $user->password = $data['password'];

        $userData = $user->login();
        if ($userData) {
            $payload = [
                'sub' => $userData['id'],
                'iat' => time(),
                'exp' => time() + (60 * 60) // Token valid for 1 hour
            ];
            $jwt = JWT::encode($payload, $this->secretKey, 'HS256');
            return ['status' => 200, 'token' => $jwt];
        } else {
            return ['status' => 401, 'error' => 'Invalid credentials'];
        }
    }

    public function getUserInfo($id, $jwt) {
        $decoded = AuthMiddleware::validateJWT($jwt, $this->secretKey);

        $user = new User($this->db);
        $userData = $user->getUserById($id);

        if ($userData) {
            return ['status' => 200, 'data' => $userData];
        } else {
            return ['status' => 404, 'error' => 'User not found'];
        }
    }
}
?>
