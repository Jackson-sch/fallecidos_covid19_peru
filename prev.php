
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <main>

        <h1>Visualización de estadísticas, Fallecidos, hospitalizados y vacunados por COVID-19</h1>
        <p>Fuente Oficial: <a href="https://www.datosabiertos.gob.pe/dataset/fallecidos-hospitalizados-y-vacunados-por-covid-19/resource/5f9748e5-999c-4e09-9af1">Plataforma Nacional de Datos Abiertos</a>gob.pe</p>

        <hr>

        <h2 class="loading">Esperando respuesta de la API...</h2>

        <section class="cols-2">
            <figure class="shadow-lg rounded">
                <p>Gráfico radial</p>
                <h3>Evolución Hospitalaria</h3>
                <canvas id="chart1"></canvas>
            </figure>

            <figure class="shadow-lg rounded">
                <p>Gráfico de área polar</p>
                <h3>Hospitalizados</h3>
                <canvas id="chart2"></canvas>
            </figure>
        </section>

        <section class="cols-1">
            <figure class="shadow-lg rounded">
                <p>Gráfico lineal</p>
                <h3>Fallecidos por rango de edad</h3>
                <canvas id="chart6"></canvas>
            </figure>
        </section>

        <section class="cols-1">
            <figure class="shadow-lg rounded">
                <p>Gráfico lineal</p>
                <h3>Fallecidos rango por meses, año y sexo</h3>
                <canvas id="chart8"></canvas>
            </figure>
        </section>

        <section class="cols-1">
            <figure class="shadow-lg rounded">
                <p>Gráfico lineal</p>
                <h3>Pico de Fallecidos por Departamento</h3>
                <canvas id="chart9"></canvas>
            </figure>
        </section>

        <section class="cols-3">
            <figure class="shadow-lg rounded">
                <p>Gráfico radial</p>
                <h3>Fallecidos, Vacunados 1ra dosis Pfizer, Astrazeneca, Sinopharm</h3>
                <canvas id="chart3"></canvas>
            </figure>

            <figure class="shadow-lg rounded">
                <p>Gráfico de <em>donut</em></p>
                <h3>Fallecidos, Vacunados 2da dosis Pfizer, Astrazeneca, Sinopharm</h3>
                <canvas id="chart4"></canvas>
            </figure>

            <figure class="shadow-lg rounded">
                <p>Gráfico de barras</p>
                <h3>Fuerza G</h3>
                <canvas id="chart5"></canvas>
            </figure>            
        </section>
        <section class="col-6">
            <figure class="shadow-lg rounded">
                <p>Gráfico de </p>
                <h3>Criterio Fallecidos</h3>
                <canvas id="chart7"></canvas>
            </figure>
        </section>
    </main>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.1/chart.min.js" integrity="sha512-O2fWHvFel3xjQSi9FyzKXWLTvnom+lOYR/AUEThL/fbP4hv1Lo5LCFCGuTXBRyKC4K4DJldg5kxptkgXAzUpvA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/chartStyles.js"></script>
    <script src="js/script.js"></script>
    
</body>