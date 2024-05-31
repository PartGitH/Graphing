<!DOCTYPE html>
<html>

<head>
    <title>PHPChart</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="style.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>

</head>

<body id="body" style="opacity:0;">

    <div id="heading">
        <div id="create-btn">
            <button onclick="location.href='CreateChart.php'" alt="Provide data and generate various graphs">Create Graph</button>
        </div>

        <div id="create-btn">
            <button onclick="location.href='Summarize.php'" alt="Provide data and generate various graphs">Summarize</button>
        </div>

        <h1 id="head"><b>Re-present</b></h1>
    </div>

    <div id="overall">

        <div id="left">
            <div id="choose-city">
                <div>
                    <br>
                    <p>NYC</p>
                    <p>Tokyo</p>
                    <p>London</p>
                    <p>Toronto</p>
                    <p>San Francisco</p>
                </div>
            </div>

            <div id="sidebar">
                <p style="margin: auto; color: floralwhite; font-size: 20px;">Generate Graph:</p>
                <button class="btn" href="#graphCanvas"
                    onclick="change('chart-name','Crimes Per 1000 People', 'chart'); toChart('bar','crime','#graphCanvas')">Crimes
                    Per 1000</button>
                <button class="btn" href="#graphCanvas1"
                    onclick="change('chart-name1','Air Pollution', 'chart1'); toChart1('line','pollution','#graphCanvas1')">Air Quality PM2.5</button>
                <button class="btn" href="#graphCanvas2"
                    onclick="change('chart-name2','Population Density', 'chart2'); toChart2('pie','population','#graphCanvas2')">Population
                    Density</button>
                <button class="btn" href="#graphCanvas3"
                    onclick="change('chart-name3','GDP Per Capita', 'chart3'); toChart3('bar','gdp per capita','#graphCanvas3')">GDP Per Capita</button>
                <button class="btn" href="#graphCanvas4"
                    onclick="change('chart-name4','Literacy Rate', 'chart4'); toChart4('line','literacy rate','#graphCanvas4')">Literacy Rate</button>
            </div>
        </div>


        <div id="right">
            <div id="content">
                <center style="font-size: 20px;">GRAPH :</center>

                <div id="chart">
                    <hr>
                    <center>
                        <h1 id="chart-name"></h1>
                    </center>
                    <hr>

                    <div id="chart-container">
                        <canvas class="canvas" id="graphCanvas"></canvas>
                    </div>
                    <br><br>
                </div>                

                <div id="chart1">
                <hr>
                    <center>
                        <h1 id="chart-name1"></h1>
                    </center>
                    <hr>

                    <div id="chart-container">
                        <canvas class="canvas" id="graphCanvas1"></canvas>
                    </div>
                    <br><br>
                </div>

                <div id="chart2">
                <hr>
                    <center>
                        <h1 id="chart-name2"></h1>
                    </center>
                    <hr>

                    <div id="chart-container">
                        <canvas class="canvas" id="graphCanvas2"></canvas>
                    </div>
                    <br><br>
                </div>

                <div id="chart3">
                <hr>
                    <center>
                        <h1 id="chart-name3"></h1>
                    </center>
                    <hr>

                    <div id="chart-container">
                        <canvas class="canvas" id="graphCanvas3"></canvas>
                    </div>
                    <br><br>
                </div>

                <div id="chart4">
                <hr>
                    <center>
                        <h1 id="chart-name4"></h1>
                    </center>
                    <hr>

                    <div id="chart-container">
                        <canvas class="canvas" id="graphCanvas4"></canvas>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </div>

    <br>

    <h1 style="text-align: center; font-style: italic; color: cornsilk;"> N Y C (few facts)</h1>

    <div id="nyc-container">


        <div id="nyc">

            <div class="text" id="nyc1">
                <div id="each1" >
                    <p>Number of public transport stops: 46 stops per 100,000 inhabitants.</p>
                </div>
                <div id="each1-1" >
                    <p>Cost of a 1-trip public transport ticket: 2.88 USD</p>
                </div>
                <div id="each1-2" >
                    <p>Schedule compliance/punctuality: 86.8%</p>
                </div>
                <div id="each1-3" >
                    <p>Length of roads in the area: 12872 km</p>
                </div>
                <div id="each1-4" >
                    <p>Price of hourly parking: 2.88 USD/h</p>
                </div>
                <div id="each1-5" alt="within 30 days of collision">
                    <p >Road deaths per 100k inhabitants: 0.36</p>
                </div>
            </div>

            <div id="nyc2">
                <div id="nyc-about" >
                    <p>
                        The "City that never sleeps" also has a metro that never sleeps - 24h services on the subway are
                        gradually being restored following the temporary Covid-19 restrictions. The metropolitan area
                        analysed here covers the five boroughs of Bronx, Brooklyn, Manhattan, Queens and Staten Island,
                        home to some 8.5 million people in 2020, an area relying on public transport for its vibrancy
                        and prosperity.
                    </p>
                </div>

            </div>


        </div>

        <div class="text" style="text-align: center;">
            <a href="https://citytransit.uitp.org/new-york" style="color:grey;">Source: CityTransit Data</a>
        </div>
    </div>


    <br><br>

    <h1 style="text-align: center; font-style: italic; color: cornsilk;"> Tokyo (few facts)</h1>

    <div id="tokyo-container">


        <div id="tokyo">
            <div>
                <p id="each2">Largest Metropolitan Area: Tokyo is the capital city of Japan and serves as the political, economic, and cultural center of the country. The most populous metropolitan area in the world, with over 37 million residents.</p>
                <p id="each2-1">Tokyo is renowned for its efficient and extensive public transportation system, including the metro and train networks. The punctuality and cleanliness of these systems are well-regarded globally.</p>
                <p id="each2-2">Tokyo is a hub for technological innovation and is home to various electronic and tech companies. Akihabara is a well-known district that caters to electronics enthusiasts and is often referred to as the "Electric Town."</p>
            </div>
            <p id="tokyo-about">
            The de facto capital, the political and economic center of the country, 
            as well as the seat of the Emperor of Japan and the national government.
            A city of Culture, Nature and Fun.
            </p>
            <div>
                <p id="each2-3">The Tokyo Skytree: The Tokyo Skytree is an iconic landmark and one of the tallest towers in the world (634 meters)</p>
                <p id="each2-4">Tokyo boasts the highest number of Michelin-starred restaurants in the world, surpassing even culinary capitals like Paris. It is a city known for its exquisite and diverse culinary scene.</p>
            </div>
        </div>

    </div>

    <br><br>

    <h1 style="text-align: center; font-style: italic; color: cornsilk;"> London (few facts)</h1>

    <div id="london-container">

        <div id="london1">
            <div id="london-about">
                <p>The Greater London Area is the home of nearly 9 million people and has one of the first Metro systems in the world. 
                    Transport for London (TfL) organises and manages the mobility in the area 
                    and is a model for transport authorities worldwide, putting sustainability at the heart of all transport investments.
                </p>
            </div>
        </div>

        <div id="london2">
            <div id="each3-cont">
                <div id="each3"><p>Cost of 1-trip public transport ticket: 3.53 GBP</p></div>
                <div id="each3-1"><p>Length of roads in the area: 14000km</p></div>
                <div id="each3-2"><p>First opened in 1863 and most extensive underground rail systems in the world, commonly known as the Tube.</p></div>
                <div id="each3-3"><p>Schedule compliance/punctuality (bus): 98.74%</p></div>
                <div id="each3-4"><p>Average cost per unit of shared-use modes (Bicycles): 2.35 GBP</p></div>
                <div id="each3-5"><p>Road deaths per 100k inhabitants (within 30 days): 1.39</p></div>
                <div id="each3-6"><p>Average daily ridership during a work day: 13,700,000</p></div>
                <div id="each3-7"><p>Cost of 1-trip public transport ticket: 3.53 GBP</p></div>
            </div>
        </div>

    </div>

    <div id="end-container">
        <div id="end-city">
            <img id="toronto" src="./assets/toronto.jpg" />
            <img id="sanfrancisco" src="./assets/san francisco.jpg" />
            <p id="toronto-about">Toronto (CA)</p> 
            <p id="san-about">San Francisco (USA)</p>
        </div>
    </div>

    <div class="to-do">
    <p>....working on adding convex hull to display the area expanding aroung cities....</p>
    <video autoplay>
        <source src="assets/convexhull.mp4" type="video/mp4"/>
    </video>
    </div>

    <div>
        <p id="footer-p">Visualization . </p>
    </div>

</body>

</html>