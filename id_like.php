<?php
session_start();
if(!isset($_SESSION["username"])){
    header("Location: login_account.php");
    exit;
}
else {
    $conn = mysqli_connect("localhost", "root", "", "hw1") or die(mysqli_error($conn));
    $query = "SELECT A.id AS id_foto FROM likes L JOIN ATTRAZIONI A ON L.id_foto = A.id WHERE L.username = '".$_SESSION['username']."'";
    $like_attrazioni = array();
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $like_attrazioni[] = $row;
    }
    mysqli_free_result($result);
    mysqli_close($conn);
    echo json_encode($like_attrazioni);
}
?>
