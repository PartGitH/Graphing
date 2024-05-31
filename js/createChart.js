function checkType() {
    const chartType = document.getElementById("type").value;
    if (chartType == 'scatter') {
        document.getElementById("forScatter").style = "display:block";
    }
    else {
        document.getElementById("forScatter").style = "display:none";
    }

}

function generateChart() {

    const chartType = document.getElementById("type").value;
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileContents = e.target.result;
            processData(fileContents, chartType);
        };
        reader.readAsText(file);
    } else {
        alert("Please select a CSV file.");
    }
}

function processData(fileContents, chartType) {
    const lines = fileContents.trim().split('\n');
    const headers = lines[0].split(',');

    if (headers.length == 2) {

        if (chartType == 'scatter') {
            const data = [];
            console.log("done1");

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                const entry = {};
                for (let j = 0; j < headers.length; j++) {
                    entry[headers[j].trim()] = values[j].trim();
                }
                data.push(entry);
            }
            createChart(data, chartType, fileContents);

            function createChart(data, chartType, fileContents) {
                console.log("done1.1");
                const canvas = document.getElementById("chart-canvas");
                const ctx = canvas.getContext("2d");
                const xAxis = document.getElementById("xAxis").value;
                const yAxis = document.getElementById("yAxis").value;

                const labels = yAxis + " vs " + xAxis;

                const lines = fileContents.trim().split('\n');
                const headers = lines[0].split(',');

                // Extract labels and data from your CSV data
                //const labels = data.map((entry) => entry[headers[0]]);
                //const chartData = data.map((entry) => parseInt(entry[headers[1].trim()]));

                const chart = new Chart(ctx, {
                    type: chartType,
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: labels,
                                data: data,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],


                    },
                    options: {
                        responsive: true,
                        // legend: {display: false},
                        scales: {
                            yAxes: [{ ticks: { min: 0 } }],
                            xAxes: [{ ticks: { min: 0 } }],
                        },
                    },

                });

                document.querySelector("body").style = "background-color: black";

                document.getElementById("download").style = "display:block";

                document.getElementById("download").addEventListener("click", function () {
                    // Convert the chart to a base64 image URL
                    const chartImage = chart.toBase64Image();

                    // Create an anchor element for downloading
                    const downloadLink = document.createElement("a");
                    downloadLink.href = chartImage;
                    downloadLink.download = "chart.png"; // Set the desired file name

                    // Trigger a click event on the anchor element to initiate the download
                    downloadLink.click();
                });
            } console.log("end1");

        }

        else {
            const data = [];
            console.log("done1");

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                const entry = {};
                for (let j = 0; j < headers.length; j++) {
                    entry[headers[j].trim()] = values[j].trim();
                }
                data.push(entry);
            }
            createChart(data, chartType, fileContents);

            function createChart(data, chartType, fileContents) {
                console.log("done1.1");
                const canvas = document.getElementById("chart-canvas");
                const ctx = canvas.getContext("2d");

                const lines = fileContents.trim().split('\n');
                const headers = lines[0].split(',');
                const labelColName = headers[0];
                const DataColName = headers[1];

                // Extract labels and data from your CSV data
                const labels = data.map((entry) => entry[headers[0]]);
                const chartData = data.map((entry) => parseInt(entry[headers[1].trim()]));

                const chart = new Chart(ctx, {
                    type: chartType,
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: headers[1],
                                data: chartData,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],


                    },
                    options: {
                        responsive: true,
                        scales: {
                            yAxes: [{ ticks: { min: 0 } }],
                        },
                    },

                });

                document.querySelector("body").style = "background-color: black";

                document.getElementById("download").style = "display:block";

                document.getElementById("download").addEventListener("click", function () {
                    // Convert the chart to a base64 image URL
                    const chartImage = chart.toBase64Image();

                    // Create an anchor element for downloading
                    const downloadLink = document.createElement("a");
                    downloadLink.href = chartImage;
                    downloadLink.download = "chart.png"; // Set the desired file name

                    // Trigger a click event on the anchor element to initiate the download
                    downloadLink.click();
                });
            } console.log("end1");
        }

    }

    else if (headers.length < 5 && headers.length > 2) {
        console.log("done2");
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const entry = {};
            for (let j = 0; j < headers.length; j++) {
                entry[headers[j].trim()] = values[j].trim();
            }
            data.push(entry);
        }
        console.log(data);
        createChart(data, chartType, fileContents);

        function createChart(data, chartType, fileContents) {
            console.log("done2.1");
            const canvas = document.getElementById("chart-canvas");
            const ctx = canvas.getContext("2d");

            const lines = fileContents.trim().split('\n');
            const headers = lines[0].split(',');
            const labelColName = headers[0];
            const DataColName = headers[1];
            console.log(headers.length);

            // Extract labels and data from your CSV data
            const labels = data.map((entry) => entry[headers[0]]); // Assuming "Name" is the label column
            const chartData = data.map((entry) => parseInt(entry[headers[1].trim()]));
            const chartData1 = data.map((entry) => parseInt(entry[headers[2].trim()]));
            const chartData2 = data.map((entry) => parseInt(entry[headers[3].trim()]));

            const chart = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: headers[1],
                            data: chartData,
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: headers[2],
                            data: chartData1,
                            backgroundColor: "rgba(255, 132, 0, 0.2)",
                            borderColor: "rgba(255, 132, 0, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: headers[3],
                            data: chartData2,
                            backgroundColor: "rgba(0, 136, 255, 0.2)",
                            borderColor: "rgba(0, 136, 255, 1)",
                            borderWidth: 1,
                        },
                    ],

                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{ ticks: { min: 0 } }],
                    },
                },
            });

            document.querySelector("body").style = "background-color: black";

            document.getElementById("download").style = "display:block";

            document.getElementById("download").addEventListener("click", function () {
                // Convert the chart to a base64 image URL
                const chartImage = chart.toBase64Image();

                // Create an anchor element for downloading
                const downloadLink = document.createElement("a");
                downloadLink.href = chartImage;
                downloadLink.download = "chart.png"; // Set the desired file name

                // Trigger a click event on the anchor element to initiate the download
                downloadLink.click();
            });
        }
    }

    else {
        alert("Only upto 3 datasets can be created");
        return;
    }

}

$(document).ready(function () {
    document.getElementById("sample-download").addEventListener("click", function () {
        const sampleSource = "sample.csv";

        // Create an anchor element for downloading
        const downloadLink = document.createElement("a");
        downloadLink.href = sampleSource;
        downloadLink.download = "sampledata.csv"; // Set the desired file name

        // Trigger a click event on the anchor element to initiate the download
        downloadLink.click();
    });
})
