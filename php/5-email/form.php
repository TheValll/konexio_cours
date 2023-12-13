<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Jean-Marie LePen</title>
</head>

<body>
    <h1 style="text-align: center;">
        Formulaire
    </h1>

    <div style="margin:0 auto; width: 200px;padding:30px;border:1px solid black;box-shadow: 5px 5px 5px black;border-radius: 10px;">
        <form action="mail.php" method="POST">
        <div>
                <p>Civilité :</p>
                <label for="m">M</label>
                <input type="radio" id="m" name="civilite" value="M">
                <label for="m">F</label>
                <input type="radio" id="f" name="civilite" value="F">
            </div>
            <div style="margin-top: 20px;">
                <label for="nom">Nom</label>
                <input type="text" id="nom" name="nom">
            </div>
            <div style="margin-top: 20px;">
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom">
            </div>
            <div style="margin-top: 20px;">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>
            <div style="margin-top: 20px;">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
            </div>
            <div style="margin-top: 20px;">
                <label for="confirm_password">Confirmer mot de passe</label>
                <input type="password" id="confirm_password" name="confirm_password">
            </div>
            <div style="margin-top: 20px;">
                <label for="city">Ville</label>
                <input type="text" id="city" name="city">
            </div>
            <div style="margin-top: 20px;">
                <label for="zip">Code postal</label>
                <input type="text" id="zip" name="zip">
            </div>
            <div style="margin-top: 20px;">
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </div>
</body>

</html>