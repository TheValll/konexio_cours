<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon de wish</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Popins, sans-serif;
    }
    body{
        background-color: #eee;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 10px
    }
    nav ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
    }
    nav ul li a{
        text-decoration: none;
        color: white;
        margin: 0 10px;
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin: 30px auto;
    }
    .livre{
        background-color: white;
        width: 30%;
        margin: 5px auto;
        text-align: center;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 1.2em;
    }
    footer{
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
        width: 100%;
        height: 75px;
        margin-top: auto;
    }
</style>
<body>
<header>
    <h1>Home</h1>
    <nav>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="livres.php">Livres</a></li>
        </ul>
    </nav>
</header>
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
    <p>© 2023 - Tous droits réservés</p>
    <p>Valentin Massonniere</p>
    <?php
        // Afficher la date du jour
        echo date("d/m/Y");
    ?>
</footer>
</body>
</html>