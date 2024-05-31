<!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Summarize</title>

    <link rel="stylesheet" href="style.css">

    <style>
      textarea{
        white-space: pre-wrap; 
        /*consecutive whitespace is not collapsed, and lines are broken at explicit newlines 
        (but are also wrapped automatically if they exceed the width of the element)*/

        
      }
    </style>

  </head>

  <body>
    <h1 id="head">Summarize</h1>

    <div>
      <div id="org-text" contenteditable></div>
      <div id="summary-cont">
        <div id="summary-btn-cont">
          <button class="summary-btn" onclick="extractLinks()">Extract Data</button>
          <button class="summary-btn">SUMMARIZE</button>
        </div>
        <p id="result-para">

        </p>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/nlp.js/dist/index.iife.min.js"></script>
	  <script src="index.js"></script>
    <script src="summarize.js"></script>

  </body>

</html>