<?php
    require_once "database.php";
    if (isset($_POST["email"]) ) {
    $nom = stripcslashes($_POST['lastname']);
    $nom = mysqli_real_escape_string($connect, $nom);
    $prenom = stripcslashes($_POST["firstname"]);
    $prenom = mysqli_real_escape_string($connect, $prenom);
    $password = stripcslashes($_POST["password"]);
    $password = mysqli_real_escape_string($connect, $password);
    $email = stripcslashes($_POST["email"]);
    $email = mysqli_real_escape_string($connect, $email);
    $querry = "INSERT into `utilisateur` (Nom, Prenom, Motdepasse, email) VALUES ('$nom', '$prenom','" . md5($password) . "', '$email')";
    $result   = mysqli_query($connect, $querry);
        if ($result) {
            echo $nom . " " . $prenom . " " . $email . " " . $password . " good";
        } else {
            echo $nom . " " . $prenom . " " . $email . " " . $password . "bad";
        }
    }
?>