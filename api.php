
<?php

include_once 'db.php';

// Limite de memoria para a API (em MB)
ini_set('memory_limit', '1024M');

// Seleccionamos coleccion FALLECIDO_HOSP_VAC
$collection = $db->FALLECIDO_HOSP_VAC;

// Mostramos todos los documentos de la coleccion en un array asociativo (cursor)
$cursor = $collection->find(array());
//$cursor = $collection->find(array(), array('limit' => 1000));


// Imprimimos los documentos de la coleccion FALLECIDO_HOSP_VAC en formato JSON (cursor)
echo json_encode(iterator_to_array($cursor));

