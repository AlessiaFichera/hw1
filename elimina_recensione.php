<?php
session_start();

if (!isset($_SESSION['username'])) {
    echo json_encode(["success" => false, "error" => "Non sei loggato."]);
    exit;
}

if (isset($_GET["id_recensione"])) {
    $conn = mysqli_connect("localhost", "root", "", "hw1");

    if (!$conn) {
        die("Connessione fallita: " . mysqli_connect_error());
    }

    $id_recensione = mysqli_real_escape_string($conn, $_GET["id_recensione"]);
    $username = mysqli_real_escape_string($conn, $_SESSION['username']);

    $check_sql = "SELECT username_recensione FROM recensione WHERE id = '$id_recensione'";
    $result = mysqli_query($conn, $check_sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if ($row['username_recensione'] == $username) {
            $sql = "DELETE FROM recensione WHERE id = '$id_recensione'";
            if (mysqli_query($conn, $sql)) {
                echo json_encode(["success" => true]);
            } else {
                echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
            }
        } else {
            echo json_encode(["success" => false, "error" => "Non puoi cancellare questa recensione."]);
        }
    } 

    mysqli_close($conn);
}
?>
