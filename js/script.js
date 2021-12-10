fetch('http://localhost/Fallecidos_Hosp_Vac/api.php')
    .then(response => response.json())
    .then(data => printCharts(data)) // printCharts(data)

function printCharts(coasters) {
    document.body.classList.add('running')
    compareAreaPolarChart(coasters, 'chart2')
    compareBarChart(coasters, 'chart7')
    compareRadialChart(coasters, 'chart1')
    compareLinealChart(coasters, 'chart6')
    fallecidoLinealChart(coasters, 'chart8')
    falldepLinealChart(coasters, 'chart9')
    fabvacunas1raRadialChart(coasters, 'chart3')
    fabvacunas2daRadialChart(coasters, 'chart4')
    fallvacunadosRadialChart(coasters, 'chart5')
}

// Graficos de circulos chart2
function compareAreaPolarChart(coasters, id){

    const data = {
        labels: ['Hospitalizados', 'Con Oxígeno', 'Con Ventilación'],
        datasets: [
            {
                data: [
                    // Filtrar pacientes hospitalizados
                    coasters.filter(eachcoaster => eachcoaster.flag_hospitalizado === '1').length,
                    coasters.filter(eachcoaster => eachcoaster.con_oxigeno === '1').length,
                    coasters.filter(eachcoaster => eachcoaster.con_ventilacion === '1').length
                ],
                borderWidth: 1,
                bordercolor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor)
            }
        ]
    };

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'polarArea',
        data, options
        })

}

// Graficos de barras chart7
function compareBarChart(coasters, id){

        const data = {
            labels: ['C. Virológico', 'C. Serológico', 'C. SINADEF', 'C. Inv. Epimediológica', 'C. Radiológico', 'C. Clínico', 'C. Nxo. Epidemiológico'],
            datasets: [
                {
                    label: 'Criterio Virológico',
                    data: [
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio virológico').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio serológico').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio SINADEF').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio investigación Epidemiológica').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio radiológico').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio clínico').length,
                        coasters.filter(eachcoaster => eachcoaster.criterio_fallecido === 'Criterio nexo epidemiológico').length,
                    ],
                    borderWidth: 1,
                    bordercolor: styles.color.solids.map(eachColor => eachColor),
                    backgroundColor: styles.color.alphas.map(eachColor => eachColor)
                }
            ]
        };

        const options = {
              labels: {
                fontColor: 'rgba(255, 255, 255, 1)'
                }
            };

        new Chart(id, {
            type: 'pie',
            data, options
            })

}

// Graficos de doughnout chart1
function compareRadialChart(coasters, id){
    // Evolucion Hospitalaria
    const data = {
        labels: ['Defunción', 'Alta', 'Referido', 'Desfavorable', 'Alta Voluntaria'],
        datasets: [
            {
                data: [
                    coasters.filter(eachcoaster => eachcoaster.evolucion_hosp_ultimo === 'defuncion').length,
                    coasters.filter(eachcoaster => eachcoaster.evolucion_hosp_ultimo === 'alta').length,
                    coasters.filter(eachcoaster => eachcoaster.evolucion_hosp_ultimo === 'referido').length,
                    coasters.filter(eachcoaster => eachcoaster.evolucion_hosp_ultimo === 'desfavorable').length,
                    coasters.filter(eachcoaster => eachcoaster.evolucion_hosp_ultimo === 'alta voluntaria').length,
                ],
                borderWidth: 1,
                bordercolor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor)
            }
        ]
    };

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'doughnut',
        data, options
        })

}

// Graficos lineal chart6
function compareLinealChart(coasters, id){
    // Fecha de Fallecimiento
    const data = {
        labels: ['0-20', '21-40', '41-60', '61-80', '81-90', '90+'],
        datasets: [
            {
                borderColor: styles.color.solids[5],
                data: [
                    // Filtrar fallecidos segun rango de edad 0-20, 21-40, 41-60, 61-80, 81-90, 90+

                    coasters.filter(eachcoaster => eachcoaster.edad >= 0 && eachcoaster.edad <= 20).length,
                    coasters.filter(eachcoaster => eachcoaster.edad >= 21 && eachcoaster.edad <= 40).length,
                    coasters.filter(eachcoaster => eachcoaster.edad >= 41 && eachcoaster.edad <= 60).length,
                    coasters.filter(eachcoaster => eachcoaster.edad >= 61 && eachcoaster.edad <= 80).length,
                    coasters.filter(eachcoaster => eachcoaster.edad >= 81 && eachcoaster.edad <= 90).length,
                    coasters.filter(eachcoaster => eachcoaster.edad >= 91 && eachcoaster.edad <= 120).length,
                ],
                borderWidth: 1,
                bordercolor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas[5],
                fill: true
            }
        ]
    };

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'line',
        data, options
        })

}

// Graficos lineal chart8
function fallecidoLinealChart(coasters, id){
    // Fecha de Fallecimiento
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Fallecidos 2020',
                borderColor: styles.color.solids[6],
                data: [
                    // Filtrar todos los fallecidos del 2020
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('01')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('02')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('03')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('04')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('05')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('06')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('07')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('08')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('09')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('10')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('11')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('12')).length,
                ],
                borderWidth: 1,
                backgroundColor: styles.color.alphas[6]
            },
            {
                type: 'bar',
                label: 'Fallecidos 2020 (Mujeres)',
                data: [
                    // Filtrar todos los fallecidos del 2020 de sexo femenino 
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('01') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('02') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('03') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('04') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('05') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('06') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('07') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('08') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('09') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('10') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('11') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('12') && eachcoaster.sexo === 'F').length,
                ],
                borderWidth: 1,
                borderColor: styles.color.solids[1],
                backgroundColor: styles.color.alphas[1]
            },
            {
                type: 'bar',
                label: 'Fallecidos 2020 (Hombres)',
                data: [
                    // Filtrar todos los fallecidos del 2020 de sexo masculino 
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('01') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('02') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('03') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('04') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('05') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('06') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('07') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('08') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('09') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('10') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('11') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.fecha_fallecimiento.includes('12') && eachcoaster.sexo === 'M').length,
                ],
                borderWidth: 1,
                borderColor: styles.color.solids[10],
                backgroundColor: styles.color.alphas[10]
            },
            {
                label: 'Fallecidos 2021',
                borderColor: styles.color.solids[8],
                data: [
                    // Filtrar todos los fallecidos del 2021
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('01')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('02')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('03')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('04')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('05')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('06')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('07')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('08')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('09')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('10')).length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('11')).length,
                    //coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('12')).length,
                ],
                borderWidth: 1,
                backgroundColor: styles.color.alphas[8]
            },
            {
                type: 'bar',
                label: 'Fallecidos 2021 (Mujeres)',
                data: [
                    // Filtrar todos los fallecidos del 2020 de sexo femenino 
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('01') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('02') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('03') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('04') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('05') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('06') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('07') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('08') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('09') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('10') && eachcoaster.sexo === 'F').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('11') && eachcoaster.sexo === 'F').length,
                    //coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('12') && eachcoaster.sexo === 'F').length,
                ],
                borderWidth: 1,
                borderColor: styles.color.solids[4],
                backgroundColor: styles.color.alphas[4]
            },
            {
                type: 'bar',
                label: 'Fallecidos 2021 (Hombres)',
                data: [
                    // Filtrar todos los fallecidos del 2020 de sexo masculino 
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('01') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('02') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('03') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('04') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('05') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('06') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('07') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('08') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('09') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('10') && eachcoaster.sexo === 'M').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('11') && eachcoaster.sexo === 'M').length,
                    //coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.fecha_fallecimiento.includes('12') && eachcoaster.sexo === 'M').length,
                ],
                borderWidth: 1,
                borderColor: styles.color.solids[9],
                backgroundColor: styles.color.alphas[9]
            }
        ]
    };

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'line',
        data, options
        })

}

// Graficos lineal chart9  ------- Fallecidos por departamentos
function falldepLinealChart(coasters, id) {

    const data = {
        // Departamentos del peru
        labels: ['Amazonas', 'Ancash', 'Apurimac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huanuco', 'Ica', 'Junin', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martin', 'Tacna', 'Tumbes', 'Ucayali'],
        datasets: [
            {
                label: 'Fallecidos 2020 por departamentos',
                borderColor: styles.color.solids[9],
                data: [
                    // Filtrar fallecidos por departamento del año 2020 
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'AMAZONAS').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'ANCASH').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'APURIMAC').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'AREQUIPA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'AYACUCHO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'CAJAMARCA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'CALLAO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'CUSCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'HUANCAVELICA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'HUANUCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'ICA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'JUNIN').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'LA LIBERTAD').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'LAMBAYEQUE').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'LIMA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'LORETO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'MADRE DE DIOS').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'MOQUEGUA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'PASCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'PIURA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'PUNO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'SAN MARTIN').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'TACNA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'TUMBES').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2020') && eachcoaster.dpt_cdc === 'UCAYALI').length
                ],
                borderWidth: 1,
                backgroundColor: styles.color.alphas[9],
                fill: true
            },
            {
                label: 'Fallecidos 2021 por departamentos',
                borderColor: styles.color.solids[6],
                data: [
                    // Filtrar fallecidos por departamento del año 2021
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'AMAZONAS').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'ANCASH').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'APURIMAC').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'AREQUIPA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'AYACUCHO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'CAJAMARCA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'CALLAO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'CUSCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'HUANCAVELICA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'HUANUCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'ICA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'JUNIN').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'LA LIBERTAD').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'LAMBAYEQUE').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'LIMA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'LORETO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'MADRE DE DIOS').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'MOQUEGUA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'PASCO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'PIURA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'PUNO').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'SAN MARTIN').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'TACNA').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'TUMBES').length,
                    coasters.filter(eachcoaster => eachcoaster.fecha_fallecimiento.includes('2021') && eachcoaster.dpt_cdc === 'UCAYALI').length
                ],
                borderWidth: 1,
                backgroundColor: styles.color.alphas[6],
                fill: true
            },
            {
                label: 'Total de Fallecidos por departamentos',
                borderColor: styles.color.solids[7],
                data: [
                    // Filtrar todos los fallecidos por departamento
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'AMAZONAS').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'ANCASH').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'APURIMAC').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'AREQUIPA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'AYACUCHO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'CAJAMARCA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'CALLAO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'CUSCO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'HUANCAVELICA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'HUANUCO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'ICA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'JUNIN').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'LA LIBERTAD').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'LAMBAYEQUE').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'LIMA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'LORETO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'MADRE DE DIOS').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'MOQUEGUA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'PASCO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'PIURA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'PUNO').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'SAN MARTIN').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'TACNA').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'TUMBES').length,
                    coasters.filter(eachcoaster => eachcoaster.dpt_cdc === 'UCAYALI').length
                ],
                borderWidth: 1,
                backgroundColor: styles.color.alphas[7],
                fill: true
            }
        ]
    };

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'line',
        data, options
        })

}
      
// Graficos radial de fabricantes de vacunas 1ra dosis contra codiv-19 (Pfizer, Astrazeneca, Sinopharm)
function fabvacunas1raRadialChart(coasters, id){

    labels = ['Pfizer', 'Astrazeneca', 'Sinopharm'];
    datasets = [
        {            
            data: [
                // Filtrar pacientes vacunados con valor 1 que tengan la primer dosis contra codiv-19
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'PFIZER').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'ASTRASENEC').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'SINOPHARM').length
            ],
            borderWidth: 1,
            borderColor: styles.color.solids.map(eachColor => eachColor),
            backgroundColor: styles.color.alphas.map(eachColor => eachColor)
        }
    ]

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'doughnut',
        data: {
            labels, datasets
        },
        options
    })

}

// Graficos radial de fabricantes de vacunas 1ra dosis contra codiv-19 (Pfizer, Astrazeneca, Sinopharm)
function fabvacunas2daRadialChart(coasters, id){

    labels = ['Pfizer', 'Astrazeneca', 'Sinopharm'];
    datasets = [
        {            
            data: [
                // Filtrar pacientes vacunados con valor 2 que tengan la segunda dosis contra codiv-19
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'PFIZER').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'ASTRASENEC').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'SINOPHARM').length
            ],
            borderWidth: 1,
            borderColor: styles.color.solids.map(eachColor => eachColor),
            backgroundColor: styles.color.alphas.map(eachColor => eachColor)
        }
    ]

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'doughnut',
        data: {
            labels, datasets
        },
        options
    })

}

// Graficos radial de fallecidos vacunados 1ra y 2da dosis contra codiv-19 (Pfizer, Astrazeneca, Sinopharm)
function fallvacunadosRadialChart(coasters, id){

    labels = ['Pfizer', 'Astrazeneca', 'Sinopharm'];
    datasets = [
        {
            data: [
                // Filtrar todos los fallecidos que tengan la 1ra y 2da dosis de vacuna contra codiv-19
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'PFIZER').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'ASTRASENEC').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '1' && eachcoaster.fabricante_dosis1 === 'SINOPHARM').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'PFIZER').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'ASTRASENEC').length,
                coasters.filter(eachcoaster => eachcoaster.flag_vacuna === '2' && eachcoaster.fabricante_dosis1 === 'SINOPHARM').length
            ],
            borderWidth: 1,
            borderColor: styles.color.solids.map(eachColor => eachColor),
            backgroundColor: styles.color.alphas.map(eachColor => eachColor)
        }
    ]

    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#fff'
            }
        }
    }

    new Chart(id, {
        type: 'doughnut',
        data, options
    })

}
