<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .livre{
        border: 1px solid black;
        width: 30%;
        margin: 5px auto;
    }
</style>
<body>
    <h1>Home</h1>
<nav>
    <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="livres.php">Livres</a></li>
    </ul>
</nav>
<?php
    $data = "fichier.txt";
    $dataTab = file($data);
    echo "<div class='container'>";
        for ($i=0; $i < count($dataTab); $i++) { 
           if($i === 0){
             echo "<div class='livre'>";
           }
           if($dataTab[$i] == " \n" && $i < count($dataTab) -1){
               echo "</div>";   
               echo "<div class='livre'>";
           }else{
                echo "<p>" . $dataTab[$i] . "</p>";
           }
           if ($i === count($dataTab)) {
                echo "</div>";
           }
        }
    echo "</div>";
    echo "</div>";
?>
<footer>
    <p>© 2020 - Tous droits réservés</p>
    <p>Valentin Massonniere</p>
    <?php
        // Afficher la date du jour
        echo date("d/m/Y");
    ?>
</footer>
</body>
</html>