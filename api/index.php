<?php
// File: /api/index.php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/controllers/UserController.php';

header('Content-Type: application/json');

// Print some debug information
print_r($_SERVER['REQUEST_URI']);

// Allow from any origin
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
}

// Set the CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

print_r("2");

// Instantiate the controller
$controller = new UserController();

function respond($response) {
    http_response_code($response['status']);
    echo json_encode($response);
    exit;
}

print_r("3");

$method = $_SERVER['REQUEST_METHOD'];
$path = isset($_SERVER['PATH_INFO']) ? explode('/', trim($_SERVER['PATH_INFO'], '/')) : [];

if ($method == 'POST' && $path[0] == 'register') {
    $input = json_decode(file_get_contents('php://input'), true);
    print_r($input);
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
