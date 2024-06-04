<?php
$conn = mysqli_connect("localhost", "root", "", "hw1");

$recensioni = array();

$res = mysqli_query($conn, "SELECT * FROM recensione ORDER BY Data");
while ($row = mysqli_fetch_assoc($res)) {
    $row['parco'] = explode(",", $row['parco']); 
    $recensioni[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);

echo json_encode($recensioni);
?>
