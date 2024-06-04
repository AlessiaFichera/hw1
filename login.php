<?php
session_start();

if (!empty($_POST["username"]) && !empty($_POST["password"])) {
    $conn = mysqli_connect("localhost", "root", "", "hw1");

    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $query = "SELECT * FROM users WHERE username = '$username'";
    $res = mysqli_query($conn, $query);

    if (mysqli_num_rows($res) > 0) {
        $entry = mysqli_fetch_assoc($res);
        if (password_verify($_POST['password'], $entry['password'])) {
            $_SESSION["logged_in"] = true;
            $_SESSION["username"] = $entry['username'];
            header("Location: home.php");
            exit;
        }
    }
    $error = "Username e/o password errati.";
    mysqli_free_result($res);
    mysqli_close($conn);
} else if (isset($_POST["username"]) || isset($_POST["password"])) {
    $error = "Inserisci username e password.";
}
?>

<html>
<head>
    <link rel='stylesheet' href='login.css'>
    <script src='login.js' defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Accedi - Etnaland</title>
</head>
<body>
    <div class="logo">
        <a href="index.php"><img id="logo-etnaland" src="immagini/logo-etnaland1.png" /></a>
    </div>
    <main class="login">
        <section class="main">
            <h1><b>Login</b></h1>
            <h5>Sei già registrato? Inserisci i tuoi dati</h5>
            <?php if (isset($error)) { echo "<p class='error'>$error</p>"; } ?>
            <form name='login' method='post'>
                <div class="username">
                    <label for='username'>Username</label>
                    <input type='text' name='username' <?php if (isset($_POST["username"])) { echo "value=".$_POST["username"]; } ?>>
                </div>
                <div class="password">
                    <label for='password'>Password</label>
                    <input type='password' name='password' id='password' <?php if (isset($_POST["password"])) { echo "value=".$_POST["password"]; } ?>>
                    <img id="visibility" src="immagini/visibility.png" />
                </div>
                <div class="submit-container">
                    <div class="login-btn">
                        <input type='submit' value="ACCEDI">
                    </div>
                </div>
            </form>
            <div class="signup"><h4>Non hai un account?</h4></div>
            <div class="signup-btn-container"><a class="signup-btn" href="signup.php">ISCRIVITI A ETNALAND</a></div>
        </section>
    </main>
    <footer>
        <div class="banner"><img src="immagini/immagine3.png"></div>
        <div class="sfondo"></div>
    </footer>
</body>
</html>
