<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Home</h1>
<nav>
    <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="livres.php">Livres</a></li>
    </ul>
</nav>

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