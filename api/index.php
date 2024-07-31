<?php
// File: /api/index.php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/controllers/UserController.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$path = isset($_SERVER['PATH_INFO']) ? explode('/', trim($_SERVER['PATH_INFO'], '/')) : [];
$controller = new UserController();

function respond($response) {
    http_response_code($response['status']);
    echo json_encode($response);
    exit;
}

if ($method == 'POST' && $path[0] == 'register') {
    $input = json_decode(file_get_contents('php://input'), true);
    respond($controller->register($input));
} elseif ($method == 'POST' && $path[0] == 'login') {
    $input = json_decode(file_get_contents('php://input'), true);
    respond($controller->login($input));
} elseif ($method == 'GET' && isset($path[0]) && $path[0] == 'user' && isset($path[1])) {
    $jwt = AuthMiddleware::getBearerToken();
    respond($controller->getUserInfo($path[1], $jwt));
} else {
    respond(['status' => 404, 'error' => 'Route not found']);
}
?>
