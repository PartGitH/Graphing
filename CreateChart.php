<!DOCTYPE html>
<html>

<head>
    <title>Generate</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script type="text/javascript" src="js/createChart.js"></script>

    <script>
        $("#generate").click(function () {
            $('html,body').animate({
                scrollTop: $("#generated").offset().top
            },
                'slow');
        });
    </script>


    <style>
        /*@import url(http://weloveiconfonts.com/api/?family=fontawesome);*/

        @font-face {
            font-family: 'Allure';
            src: URL('Allura-Regular.ttf') format('truetype');

            font-family: 'YoungSerif';
            src: URL('YoungSerif-Regular.ttf') format('truetype');

            font-family: 'FoundersGrotesk';
            src: url("FoundersGrotesk-Medium.otf") format("opentype");
        }

        form {
            font-size: 25px;
            text-align: center;
            margin: auto;
            background: linear-gradient(75deg, rgb(240, 248, 255) 0%, rgb(172, 216, 255) 60%, rgb(240, 248, 255) 100%);
            padding: 20px;
            border-radius: 10px;
        }

        input,
        button,
        select {
            color: rgb(33, 106, 170);
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
            font-size: 23px;
            font-family: candara;
        }

        button {
            border: 0px solid rgb(0, 82, 137);
        }

        input:hover,
        button:hover,
        select:hover,
        option:hover {
            background-color: rgb(65, 65, 65);
            color: rgb(166, 214, 255);
        }

        #upload-cont {
            background: linear-gradient(90deg, rgb(175, 175, 175) 0%, rgb(206, 206, 206) 20%, rgb(206, 206, 206) 80%, rgb(175, 175, 175) 100%);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            height: 400px;
        }

        #generated {
            margin-top: 5%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        #download {
            display: none;
            width: 15%;
            color: rgb(0, 252, 139);
            border-color: rgb(0, 109, 60);
            font-size: 20px;
        }

        #download:hover {
            background-color: rgb(70, 70, 70);
        }

        html {
            height: 100%;
        }

        body {
            font-family: candara;
        }

        #header {
            display: flex;
            height: 70px;
            background: linear-gradient(120deg, rgba(175, 175, 175, 0) 0%, rgb(206, 206, 206) 40%, rgb(206, 206, 206) 60%, rgba(175, 175, 175, 0) 100%);
        }

        .title {
            margin: auto;
            letter-spacing: 1vw;
            text-align: center;
            font-family: FoundersGrotesk;
            color: rgb(232, 241, 255);
            text-shadow: 3px 3px rgb(0, 159, 212);
            font-size: 50px;
        }

        #forScatter {
            display: none;
        }
    </style>
</head>

<body>
    <div id="header">
        <h1 class="title">GENERATE CHART</h1>
    </div>

    <div id="upload-cont">

        <form>
            <button id="sample-download" style="margin: auto;"><i>Download Sample CSV</i></button><br><br>
            <label>Upload a CSV file for Chart Data:</label>
            <input id="file" type="file" accept=".csv" required>
            <br><br>
            <label>Choose Chart type :</label>
            <select name="type" id="type" onchange="checkType()" required>
                <option value="bar">Bar Graph</option>
                <option value="horizontalBar">Horizontal Bar Graph</option>
                <option value="line">Line Graph</option>
                <option value="scatter">Scatter Graph</option>
                <option value="pie">Pie Graph</option>
                <option value="doughnut">Doughnut Graph</option>
                <option value="polarArea"> PolarArea Graph</option>
                <option value="radar">Radar Graph</option>
            </select>
            <br><br>
            <span id="forScatter"><label>Label For the Scatter Plot : </label><input style="text-align: center;"
                    type="text" id="yAxis">VS<input style="text-align: center;" type="text" id="xAxis"><br><br></span>
            <button id="generate" type="button" onclick="generateChart()">Generate</button>
        </form>

    </div>

    <div id="generated">
        <br>
        <button id="download" style="margin: auto;">Download Chart</button>

        <br>
        <canvas id="chart-canvas" style="margin: auto;"></canvas>
    </div>
    <br>

</body>

</html>