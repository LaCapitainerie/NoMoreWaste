<?
function ReturnState(string $res){
    require_once __DIR__ . "/../response.php";

    switch ($res) {
        case "token":
            echo jsonResponse(401, ["Content-Type: application/json"], [
                "success" => false,
                "result" => null,
                "error" => "Unauthorized"
            ]);
            return;
        case "ok":
            echo jsonResponse(200, ["Content-Type: application/json"], [
                "success" => true,
                "result" => $res,
                "error" => null
            ]);
            break;
        default:
            echo jsonResponse(500, ["Content-Type: application/json"], [
                "success" => false,
                "result" => null,
                "error" => "Internal Server Error"
            ]);
            break;
    };
};