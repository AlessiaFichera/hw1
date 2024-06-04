<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

$conn = mysqli_connect("localhost", "root", "", "hw1");

    $id = $_POST['id'];
    $username = $_SESSION['username'];

    $sql = "INSERT INTO likes (id_foto,username) 
            VALUES ('".$id."','".$username."')";
    
    mysqli_query($conn, $sql);
    mysqli_close($conn);
?>