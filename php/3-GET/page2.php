<h1>PAGE 2</h1>

<?php

/* 
$_GET est une superglobale qui permet de récupérer les paramètres passés dans l'URL. 
Elle doit être écrite obligatoirement en majuscule.
Tout les superglobales sont des tableaux associatifs
$_GET est un tableau associatif
Puisse que c'est un tableau associatif, on peut utiliser la syntaxe suivante pour récupérer les paramètres : $_GET['cle'] ==> la clé est le nom du paramètre passé dans l'URL
*/

if($_GET)
{
    echo $_GET['article'] . '<br>';
    echo $_GET['prix'] . ' €<br>';
    echo $_GET['couleur'] . '<br>';
}else{
    echo 'Aucun paramètre dans l\'URL';
}

// $_SERVER est une superglobale qui permet de récupérer des informations sur le serveur.Elle nous fournit des informations tell que le nom du serveur, le nom du fichier en cours d'exécution, le chemin du script, le nom du script, le nom du protocole utilisé, le nom du port utilisé, le nom du navigateur, l'adresse IP du client, etc...


// Puisse $_SERVER est un tableau associatif, on peut utiliser la syntaxe suivante pour récupérer les informations : $_SERVER['cle'] ==> la clé est le nom de l'information que l'on souhaite récupérer
// $_SERVER['REQUEST_METHOD'] ==> permet de récupérer la méthode utilisée pour envoyer les données au serveur (GET ou POST)
