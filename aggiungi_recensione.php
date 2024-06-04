<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}


$conn = mysqli_connect("localhost", "root", "", "hw1");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_SESSION['username'];
    $data = $_POST['Data'];
    $parco = implode(",", $_POST['parco']);
    $recensione = $_POST['recensione'];
    $esperienza = $_POST['esperienza'];

    $sql = "INSERT INTO recensione (username_recensione, Data, parco, recensione, esperienza) 
            VALUES ('$username', '$data', '$parco', '$recensione', '$esperienza')";
    
    mysqli_query($conn, $sql);
    mysqli_close($conn);
}
?>
