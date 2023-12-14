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

// var_dump($bdd);

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

// $resultat3 = $bdd->query("SELECT * FROM employes")->fetchAll(PDO::FETCH_ASSOC);
// var_dump($resultat3);
// print_r($resultat3[0]['prenom']);

// echo "<table border='1'>";
// echo "<thead>";

// foreach ($resultat3[0] as $key => $value) {
//     echo "<th>$key</th>";
// }

// echo "</thead>";

// foreach ($resultat3 as $key => $employe) {
//     echo "<tr>";
//     foreach ($employe as $key2 => $value) {
//         echo "<td>$value</td>";
//     }
//     echo "</tr>";
// }
// echo "</table>";


// getColumnMeta() : Retourne les métadonnées d'une colonne issue d'un résultat PDOStatement

// $resultat4 = $bdd->query("SELECT * FROM employes");

// echo "<table border='1'>";
// echo "<thead>";
// echo "<tr>";
// for ($i=0; $i < $resultat4->columnCount(); $i++) { 
//     echo "<th>" . $resultat4->getColumnMeta($i)['name'] . "</th>";
// }
// echo "</tr>";
// echo "</thead>";
// echo "<tbody>";
// while($employe = $resultat4->fetch(PDO::FETCH_ASSOC)){
//     echo "<tr>";
//     foreach ($employe as $key => $value) {
//         echo "<td>$value</td>";
//     }
//     echo "</tr>";
// }
// echo "</tbody>";
// echo "</table>";


// Requête préparée avec PREPARE() et EXECUTE()

echo "<h2>Requête préparée avec PREPARE() + EXECUTE()</h2>";

// La requête préparée est préconisée si vous exécutez plusieurs fois la même requête et ainsi éviter de répéter le cycle complet analyse / interprétation / exécution réalisé par le SGBD (gain de performance)
// Aussi, cela permet de se prémunir des injections SQL (tentative de piratage) en neutralisant les caractères spéciaux avec la méthode bindParam() ou bindValue()

// prepare() : méthode de l'objet PDOStatement qui permet de préparer la requête mais ne l'exécute pas

// execute() : méthode de l'objet PDOStatement qui permet d'exécuter une requête préparée

echo "<h3>Requête préparée avec BINDPARAM()</h3>";

// Recupération les informations de l'employé qui s'appelle Chloé

// $prenom = 'Chloé';

// $request = $bdd->prepare("SELECT * FROM employes WHERE prenom = :prenom");
// // :prenom est un marqueur nominatif qui est en attente d'une valeur

// $request->bindParam(':prenom', $prenom, PDO::PARAM_STR); // bindParam() reçoit exclusivement une variable vers laquelle pointe le marqueur, on ne peut pas y mettre une valeur directement

// // PDO::PARAM_STR : type de la donnée attendue par le marqueur, ici une chaîne de caractères
// // PDO::PARAM_INT : type de la donnée attendue par le marqueur, ici un entier
// // PDO::PARAM_BOOL : type de la donnée attendue par le marqueur, ici un booléen
// // PDO::PARAM_NULL : type de la donnée attendue par le marqueur, ici NULL

// // Si le paramètre est de type string, il n'est pas obligatoire de mettre le type en 3ème argument

// $request->execute();

// // execute() : méthode de l'objet PDOStatement qui permet d'exécuter une requête préparée

// $donnees = $request->fetch(PDO::FETCH_ASSOC);
// var_dump($donnees);

// echo "Bonjour je suis $donnees[prenom] $donnees[nom] du service $donnees[service] <br>";


echo "<h3>Requête préparée avec BINDVALUE()</h3>";

// Recupération les informations de l'employé qui s'appelle Chloé

// $prenom = 'Chloé';
// $request2 = $bdd->prepare("SELECT * FROM employes WHERE prenom = :prenom");
// $request2->bindValue(':prenom', $prenom, PDO::PARAM_STR); // bindValue() reçoit une variable ou une valeur directement
// $request2->execute();
// $donnees2 = $request2->fetch(PDO::FETCH_ASSOC);
// var_dump($donnees2);
// echo "Bonjour je suis $donnees2[prenom] $donnees2[nom] du service $donnees2[service] <br>";