<?php
// Connexion à la base de données
// PDO = PHP Data Object (objet de données PHP) est l'extension PHP officielle pour la gestion des bases de données.
// Pour se connecter, il faut 4 paramètres : 
// 1. Le nom du serveur de la base de données (host)
// 2. Le nom de la base de données (dbname)
// 3. Le nom d'utilisateur de la base de données (root)
// 4. Le mot de passe de la base de données ('') sur windows ou ('root') sur mac

// Nous pouvons ajouter un tableau de paramètres supplémentaires pour forcer l'encodage en UTF8 et l'affichage des erreurs SQL
// PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING : pour afficher les erreurs SQL
// PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' : pour forcer l'encodage en UTF8

try{
    $bdd = new PDO('mysql:host=localhost;dbname=entreprises;charset=utf8', 'root', '',
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    ]);
}
catch(Exception $e){
    die('Erreur : '.$e->getMessage());
}

// var_dump($bdd);²

// echo "<pre>";
// print_r(get_declared_classes());
// echo "</pre>";

// echo "<pre>";
// print_r(get_class_methods(PDO::class));
// echo "</pre>";

// INSERT INTO employes (prenom, nom, sexe, service, date_embauche, salaire) VALUES ('Simon', 'Duflot', 'm', 'informatique', '2023-12-14', 2500);

// Executer une requête SQL ne retournant pas de résultat avec exec() : INSERT, UPDATE, DELETE
echo "<h2>INSERT, UPDATE, DELETE avec exec()</h2>";

// $resultat = $bdd->exec("INSERT INTO employes (prenom, nom, sexe, service, date_embauche, salaire) VALUES ('Simon', 'Duflot', 'm', 'informatique', '2023-12-14', 2500)");

// echo "Nombre d'enregistrements affectés par l'INSERT : $resultat <br>";
// echo "Dernier ID généré : " . $bdd->lastInsertId();

// $updateSalaire = $bdd->exec("UPDATE employes SET salaire = 2950 WHERE id_employe = 350");

// $deleteResultat = $bdd->exec("DELETE FROM employes WHERE id_employe = 992");


// Executer une requête SQL retournant un ou plusieurs résultats SELECT mais aussi DELETE, UPDATE, INSERT avec query()
echo "<h2>SELECT DELETE, UPDATE, INSERT avec query()</h2>";

// $resultat2 = $bdd->query("SELECT * FROM employes WHERE prenom = 'Amandine'");
// var_dump($resultat2);

// $info = $resultat2->fetch(PDO::FETCH_ASSOC);
// var_dump($info);

// echo "<pre>";
// print_r($info);
// echo "</pre>";

// echo "Bonjour je suis $info[prenom] $info[nom] du service $info[service] <br>";

// On peux enchainer les appels à la méthode fetch() pour traiter plusieurs résultats
// $bdd->query("SELECT * FROM employes WHERE prenom = 'Amandine'")->fetch(PDO::FETCH_ASSOC);

$resultat3 = $bdd->query("SELECT * FROM employes")->fetchAll(PDO::FETCH_ASSOC);
// var_dump($resultat3);
// print_r($resultat3[0]['prenom']);

echo "<table border='1'>";
echo "<thead>";

foreach ($resultat3[0] as $key => $value) {
    echo "<th>$key</th>";
}

echo "</thead>";

foreach ($resultat3 as $key => $employe) {
    echo "<tr>";
    echo "<th>" . $employe['id_employe'] . "</th>";
    echo "<th>" . $employe['prenom'] . "</th>";
    echo "<th>" . $employe['nom'] . "</th>";
    echo "<th>" . $employe['sexe'] . "</th>";
    echo "<th>" . $employe['service'] . "</th>";
    echo "<th>" . $employe['date_embauche'] . "</th>";
    echo "<th>" . $employe['salaire'] . "</th>";
    echo "</tr>";
}
echo "</table>";