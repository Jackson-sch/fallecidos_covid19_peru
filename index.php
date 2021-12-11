<?php 
    include_once 'db.php';
?>
<!doctype html>
<html lang="en">
  <head>
    <title>FALLECIDOS, HOSPITALIZADOS Y VACUNADOS</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.css" rel="stylesheet" type="text/css">
    <script src="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

  </head>
  <body>
    <!-- Container -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>FALLECIDOS, HOSPITALIZADOS Y VACUNADOS</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <a class="btn btn-outline-primary float-end" href="prev.php" role="button"><i class="bi bi-bar-chart-line"></i> Previsualizar</a>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <table class="table table-striped table-bordered" id="MyTable">
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Fecha de fallecimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $collection = $db->FALLECIDO_HOSP_VAC;
                            // Limitar a una cantidad de documentos mostrados de coleccion FALLECIDO_HOSP_VAC
                            $cursor = $collection->find(array(), array("limit" => 5000));
                            
                            $startime = microtime(true);

                            foreach ($cursor as $document) {
                                echo "<tr>";
                                    echo "<td>" . $document["id_persona"] . "</td>";
                                    echo "<td>" . $document["edad"] . "</td>";
                                    echo "<td>" . $document["sexo"] . "</td>";
                                    echo "<td>" . $document["fecha_fallecimiento"] . "</td>";
                                echo "</tr>";
                            }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>  <!-- container -->

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script type="text/javascript">
    var TableProductos = document.querySelector("#MyTable");
        var dataTable = new DataTable(TableProductos,{
            labels: {
        placeholder: "Buscar...",
        perPage: "Mostrar {select} datos por página",
        noRows: "No hay datos para mostrar",
        info: "Mostrando {start} al {end} de {rows} datos (Página {page} de {pages} páginas)",
            },
        });
    </script>
    </body>
</html>
