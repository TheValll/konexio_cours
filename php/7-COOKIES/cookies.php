<!-- Les cookies sont des fichiers textes stockés sur le poste client. Ils sont utilisés pour stocker des informations sur le client, comme son nom, son adresse, son mot de passe, etc. Ils sont utilisés pour garder en mémoire des informations sur le client, afin de lui proposer des services personnalisés. 

Les cookies sont envoyés au serveur web à chaque requête HTTP, ce qui permet au serveur de reconnaître le client et de savoir s'il est connecté ou non, et de lui proposer des services personnalisés.

Les cookies sont stockés dans le navigateur du client, et sont donc accessibles par le client. Ils ne doivent donc pas contenir d'informations sensibles, comme le mot de passe du client, ou son numéro de carte bancaire.

Les cookies sont stockés dans la superglobale $_COOKIE, qui est un tableau associatif. Les clés du tableau sont les noms des cookies, et les valeurs sont les valeurs des cookies.

Pour créer un cookie, on utilise la fonction setcookie(), qui prend 3 paramètres : le nom du cookie, sa valeur, et sa durée de vie en secondes. La durée de vie est optionnelle, et si elle n'est pas spécifiée, le cookie sera supprimé à la fin de la session, c'est-à-dire lorsque le navigateur sera fermé. -->

<div>
    <a href="?country=fr">France</a>
    <a href="?country=es">Espagne</a>
    <a href="?country=it">Italie</a>
    <a href="?country=de">Allemagne</a>
</div>
<?php
    if (isset($_GET['country'])) {
      $pays = $_GET['country'];
      
    }elseif (isset($_COOKIE['country'])) {
        $pays = $_COOKIE['country'];
    }else{
        $pays = '';
    }

    $duration = time() + 365*24*3600;
    setcookie('country', $pays, $duration);

    switch ($pays) {
        case 'fr':
            echo "Bienvenue en France";
            break;
        case 'es':
            echo "Bienvenido en España";
            break;
        case 'it':
            echo "Benvenuto in Italia";
            break;
        case 'de':
            echo "Willkommen in Deutschland";
            break;
        default:
            echo "Veuillez choisir un pays";
            break;
    }