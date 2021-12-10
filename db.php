<?php

require_once __DIR__ . '/vendor/autoload.php';
// Conexion a base de datos MongoDB
$client = new MongoDB\Client(
    'mongodb+srv://admin:admin123@cluster0.32pgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

$db = $client->covid19;
