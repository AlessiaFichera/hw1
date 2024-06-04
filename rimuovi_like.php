<?php


if (isset($_POST["id"])) {
    $conn = mysqli_connect("localhost", "root", "", "hw1");

    if (!$conn) {
        die("Connessione fallita: " . mysqli_connect_error());
    }

    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $sql = "DELETE FROM likes WHERE id_foto = '$id'";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => mysqli_error($conn)]);
    }

    mysqli_close($conn);
} else {
    echo json_encode(["success" => false, "error" => "ID foto non fornito."]);
}
?>
