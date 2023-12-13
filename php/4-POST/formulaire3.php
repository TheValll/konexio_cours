<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if($_POST["civilite"] != null && iconv_strlen($_POST["nom"]) > 2 && iconv_strlen($_POST["prenom"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) && $_POST["password"] == $_POST["confirm_password"] && isset($_POST["password"]) && is_numeric($_POST["zip"]) >= 5){
            foreach ($_POST as $key => $value) {
                echo "<table border=1>";
                echo "<tr>";
                echo "<td>";
                echo $key;
                echo "</td>";
                echo "<td>";
                echo $value;
                echo "</td>";
                echo "</tr>";
                echo "</table>";
            }
        }else {
            echo "erreur";
        }
    }
?>