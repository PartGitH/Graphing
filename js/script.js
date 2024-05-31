function change(chartname, name, idname) {
    document.getElementById(chartname).innerHTML = name;
    document.getElementById(idname).style = "display:block;";
}

function makeChart(sampledata) {
    var sampledataLabels = sampledata.map(function (d) {
        return d.year;
    });
    var weeksData = sampledata.map(function (d) {
        return +d.rate;
    });

    var chart = new Chart('chart', {
        type: "line",
        data: {
            labels: sampledataLabels,
            datasets: [
                {
                    data: weeksData
                }
            ]
        }
    });
}

function toChart(oftype, dbtable, destination) {
    $.post("datas.php",
        function (data) {
            var city = [];
            var crime = [];

            for (var i in data) {
                city.push(data[i].cities);
                crime.push(data[i].crimes);
                console.log(city);
            }

            var chartdata = {
                labels: city,
                datasets: [
                    {
                        label: 'Crimes Per 1000 people',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: crime,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            };

            //if(bargraph) bargraph.destroy();
            var graphTarget = $(destination);
            var barGraph = new Chart(graphTarget, {
                type: oftype,
                data: chartdata,
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{ ticks: { min: 0} }],
                    }
                },
                borderWidth: 1
            });

        });

}

function toChart1(oftype, dbtable, destination) {
    $.post("datas1.php",
        function (data1) {
            var city = [];
            var pollute = [];

            for (var i in data1) {
                city.push(data1[i].cities);
                pollute.push(data1[i].pollution);
                console.log(city);
            }

            var chartdata = {
                labels: city,
                datasets: [
                    {
                        label: 'Pollution in Air (PM2.5)',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: pollute,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            };

            //if(bargraph) bargraph.destroy();
            var graphTarget = $(destination);
            var barGraph = new Chart(graphTarget, {
                type: oftype,
                data: chartdata,
                options: {
                    responsive: true,
                },
                borderWidth: 1
            });

        });

}

function toChart2(oftype, dbtable, destination) {
    $.post("datas2.php",
        function (data) {
            var city = [];
            var population = [];

            for (var i in data) {
                city.push(data[i].cities);
                population.push(data[i].population);
                console.log(population);
            }

            var chartdata = {
                labels: city,
                datasets: [
                    {
                        label: 'Population Density per sq km.',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: population,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            };

            //if(bargraph) bargraph.destroy();
            var graphTarget = $(destination);
            var barGraph = new Chart(graphTarget, {
                type: oftype,
                data: chartdata,
                options: {
                    responsive: true,
                },
                borderWidth: 1
            });

        });

}

function toChart3(oftype, dbtable, destination) {
    $.post("datas3.php",
        function (data) {
            var city = [];
            var percapita = [];

            for (var i in data) {
                city.push(data[i].cities);
                percapita.push(data[i].usd);
            }

            var chartdata = {
                labels: city,
                datasets: [
                    {
                        label: 'GDP Per Capita (usd)',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: percapita,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            };

            //if(bargraph) bargraph.destroy();
            var graphTarget = $(destination);
            var barGraph = new Chart(graphTarget, {
                type: oftype,
                data: chartdata,
                options: {
                    responsive: true,

                    scales: {
                        yAxes: [{ ticks: { min: 0} }],
                    }
                },
                borderWidth: 1
            });

        });

}

function toChart4(oftype, dbtable, destination) {
    $.post("datas4.php",
        function (data) {
            var city = [];
            var percent = [];

            for (var i in data) {
                city.push(data[i].cities);
                percent.push(data[i].literacy);
                console.log(city);
            }

            var chartdata = {
                labels: city,
                datasets: [
                    {
                        label: 'Literacy Rate %',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: percent,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            };

            //if(bargraph) bargraph.destroy();
            var graphTarget = $(destination);
            var barGraph = new Chart(graphTarget, {
                type: oftype,
                data: chartdata,
                borderWidth: 1,
                options: {
                    responsive: true,
                }
            });
        });
}



$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 250) {
        $('#nyc-about').animate({ opacity: 1 }, 700);
        $('#each1').animate({ opacity: 1 }, 700);
    }
    if (y > 320) {
        $('#each1-1').animate({ opacity: 1 }, 700);
    }
    if (y > 460) {
        $('#each1-2').animate({ opacity: 1 }, 800);
    }
    if (y > 570) {
        $('#nyc2').animate({ opacity: 1 }, 800);
        setInterval(function () { $('#nyc-about p').animate({ opacity: 1 }, 800); }, 2000);
        $('#each1-3').animate({ opacity: 1 }, 900);
    }
    if (y > 650) {
        $('#each1-4').animate({ opacity: 1 }, 1000);
    }
    if (y > 730) {
        $('#each1-5').animate({ opacity: 1 }, 1000);
    }
    if (y > 1530) {
        $('#tokyo-about').animate({ opacity: 1 }, 2000);
        setInterval(function () {
            $('#each2').animate({ opacity: 1 }, 1000);
            $('#each2-1').animate({ opacity: 1 }, 1000);
            $('#each2-2').animate({ opacity: 1 }, 1000);
        }, 2000);
        setInterval(function () {
            $('#each2-3').animate({ opacity: 1 }, 1000);
            $('#each2-4').animate({ opacity: 1 }, 1000);
        }, 3000);

    }
    if (y > 2230) {
        $('#london-about').animate({ opacity: 1 }, 1000);
        setInterval(function () {
            $('#each3').animate({ opacity: 1 }, 1000);
            $('#each3-1').animate({ opacity: 1 }, 1000);
            $('#each3-2').animate({ opacity: 1 }, 1000);
        }, 2000);
        setInterval(function () {
            $('#each3-3').animate({ opacity: 1 }, 1000);
            $('#each3-4').animate({ opacity: 1 }, 1000);
            $('#each3-5').animate({ opacity: 1 }, 1000);
        }, 3000);
        setInterval(function () {
            $('#each3-6').animate({ opacity: 1 }, 1000);
            $('#each3-7').animate({ opacity: 1 }, 1000);
        }, 4000);
    }
    if (y > 2630) {
        setInterval(function () {
            $('#each3').animate({ opacity: 1 }, 1000);
        }, 2000);
    }

});

//$(selector).post(URL,data,function(data,status,xhr),dataType);
$(document).ready(function () {
    //toChart();
    $('#body').animate({ opacity: 1 }, 1000);

});