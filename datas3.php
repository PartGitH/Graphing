<?php
header('Content-Type: application/json');
$conn = mysqli_connect("localhost","root","parthadmin","chart");

$sqlQuery = "select city as cities, usd from `gdp per capita`";
$result = mysqli_query($conn, $sqlQuery);
$data = array();
foreach($result as $row) {
    $data[] = $row;
}

mysqli_close($conn);
echo json_encode($data);
?>