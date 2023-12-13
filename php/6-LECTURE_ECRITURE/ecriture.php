<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $nom = $_POST["nom"];
        $prenom = $_POST["prenom"];
        $ficher = fopen('fichier.txt', 'a');
        fwrite($ficher, $nom . ' ' . $prenom . "\n");
        fclose($ficher);
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 style="text-align: center;">
        Formulaire
    </h1>

    <div style="margin:0 auto; width: 200px;padding:30px;border:1px solid black;box-shadow: 5px 5px 5px black;border-radius: 10px;">
        <form action="" method="POST">
            <div>
                <label for="nom">Nom</label>
                <input type="text" id="nom" name="nom">
            </div>
            <div style="margin-top: 20px;">
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom">
            </div>
            <div style="margin-top: 20px;">
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </div>
</body>

</html>