<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

return $response->withJson($data);
?>
