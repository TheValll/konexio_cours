<style>
    h2{
        color: red;
        font-size: 18px;
        text-align: center;
    }
</style>

<h2>
    Introduction a php
</h2>

<?php
echo "Bonjour"; // Afficher du texte sur la page
// echo "<h2>Yooo</h2>"; // Ecrire du html en php

?>

<h1>Titre hors code php</h1> <!--  On peux écrire du html dans la page si on ferme la balise php  -->

<?= "Cette balise permet de faire un echo <br>"; ?>

<?php
print "Bonjour";  // Permet de faire un echo
echo "<hr><h2>Les commentaires</h2>";
echo "Les commentaires sur une seule ligne ce fait avec // <br>";
echo "Les commentaires sur plusieurs lignes ce fait avec /* */ ou #";

$mot1 = "Oui";
$mot2 = "phi";
echo "<br>";
echo$mot1 . " " . $mot2; // On peux concaténer des chaînes de caractères avec le .
echo "<br>";
echo "$mot1 $mot2"; // On peux concaténer des chaînes de caractères directement en utilisant les ".

// Les boucles :

echo "<br>";
$i = 0;
while ($i <= 10) {
    echo"la boucle <br>";
    $i++;
}

// Les variables : 
// Une variable est un espace mémoire nommé qui permet de conserver une valeur.
// La déclaration d'une variable se fait avec le signe $.
// Une variable est sensible à la casse.C'est à dire que $maVariable est différent de $mavariable.
// Une variable ne peut pas commencer par un chiffre.
// Une variable ne peut contenir que des caractères alphanumériques (A-Z, a-z, 0-9) ou le caractère souligné (_).
// Une variable ne peut pas contenir d'espace.
// Une variable ne peut pas contenir d'accent.
// Il est recommandé d'utiliser du camelCase pour nommer une variable ou snake_case.Exemple : $maVariable ou $ma_variable.

$la_variable_de_con_la = 666;

echo "<br>";
$nombre_1 = 5;
$nombre_2 = 10;
echo $nombre_1 + $nombre_2;

echo "<br>";
$nombre_3 = 50;
$nombre_4 = 10;
$result = $nombre_3 * $nombre_4;

echo "<br>";    
echo "Le résultat de $nombre_3 x $nombre_4 est de $result"; 

echo "<br>";
echo gettype($nombre_4); // Permet d'avoir le type de la variable

echo "<br>";
echo "<hr>";
echo "<h2>Assignements par référence</h2>";

$a = "test";
$b = &$a;

echo "<br>";
$a = "test2";
echo $b;
echo "<br>";
echo $a;

echo "<hr>";
echo "<h2>Concaténation lors de l'affectation</h2>";

echo "<br>";
$prenom1 = "Bruno";
$prenom1 = "Claire";
echo $prenom1;

echo "<br>";
$prenom2 = "Niclos";
$prenom2 .= "Marie"; // .= Permet de concerver la valeur précédente "équivalent au += en JS"
echo $prenom2;

echo "<hr>";
echo "<h2>Les guillemets et quotes</h2>";

echo "<br>";
$msg = "Aujourd'hui";
$ms2 = 'Aujourd\'hui'; // Le \ permet d'ignorer le ' d'une chaine de caractère
$text = "Voici un texte de fou";
echo "$text furieux";

// Exercice 1: Écrivez un programme qui utilise quatres variables pour stocker le nom, le prénom, l'age et la ville.Puis affichez la phrase Bonjour je suis nom prénom et j'ai age ans et j'habite à ville en utilisant les variables.".

echo "<br>";
echo "<h3>Exercice 1</h3>";
echo "<br>";
$prenomExo = "Simon";
$nomExo = "Duflot";
$ageExo = 29;
$villeExo = "Paris";
$isAdmin = true;
echo ($isAdmin) 
? "Bonjour je suis $nomExo $prenomExo et j'ai $ageExo ans et j'habite à $villeExo et je suis admin" 
: "Bonjour je suis $nomExo $prenomExo et j'ai $ageExo ans et j'habite à $villeExo et je ne suis pas admin";

echo "<br>";
$sentence = "Bonjour je suis $nomExo $prenomExo et j'ai $ageExo ans et j'habite à $villeExo et";
echo ($isAdmin) 
? "$sentence je suis admin"
: "$sentence je ne suis pas admin";

echo "<hr>";
echo "<h2>Constantes et constantes magique</h2>";

echo "<br>";
define("CAPITALE", "Paris"); // Par convention on déclare une constante se déclare en majuscule
define("TAUX_TVA", 0.2); 
echo CAPITALE;

// Les constantes magiques s'utilisent avec les ("__")

echo "<br>";
echo __FILE__; // Affiche le fichier courant 
echo "<br>";
echo __DIR__; // Affiche le répertoire courant 
echo "<br>";
echo __LINE__; // Affiche la ligne dans le fichier courant 

// Exercice 2 : Écrivez un programme qui utilise trois constante pour stocker les couleurs "Bleu", "Blanc" et "Rouge". Le programme doit ensuite afficher la phrase "Bleu-Blanc-Rouge" en utilisant ces trois constantes et en insérant des tirets ("-") entre chaque couleur.

echo "<br>";
echo "<h3>Exercice 2</h3>";
echo "<br>";
define("RED","Rouge");
define("BLUE","Bleu");
define("WHITE","Blanc");
echo BLUE . "-" . WHITE . "-" . RED;

echo "<hr>";
echo "<h2>Les opérateur arithmétiques</h2>";

// Les opérateurs arithmétiques permettent d'effectuer des opérations de calculs sur des valeurs numériques
// Addition +
// Soustraction -
// Multiplication *
// Division /
// Modulo %
// Exponention **

$d = 10;
$e = 2;

echo "<br>";
echo $d + $e;
echo "<br>";
echo $d - $e;
echo "<br>";
echo $d * $e;
echo "<br>";
echo $d / $e;
echo "<br>";
echo $d % $e;
echo "<br>";
echo $d ** $e;

echo "<hr>";
echo "<h2>Les structures conditionnelles (if/else) - Opérateurs s de comparaisons</h2>";

// empty() permet de vérifier si une variable est vide
// isset() permet de vérifier si une variable existe et a une valeur non NULL

// Les valeurs considérer comme NULL :
// 0, false, NULL, ""

$variable = 47;

if(isset($variable)) { // Si la variable existe et a une valeur non NULL
    echo "La variable existe est n'est pas NULL.<br>";
} else {
    echo "La variable n'existe pas ou est NULL. <br>"; 
}

if(empty($variable)) { // Si la variable est vide
    echo "La variable est vide. <br>";
} else {
    echo "La variable n'est pas vide. <br>";
}

$mb1 = 10;
$mb2 = 5;
$mb3 = 2;

// Comparaison
if($mb1 > $mb2){
    echo "$mb1 est supérieur à $mb2";
}else{
    echo "$mb1 n'est supérieur pas à $mb2";
}
echo "<br>";
// AND
if($mb1 > $mb2 && $mb2 > $mb3){
    echo "$mb1 est supérieur à $mb2 et $mb2 est supérieur à $mb3";
}else{
    echo "Au moins une des deux conditions n'est pas remplies";
}
echo "<br>";
// OR
if($mb1 > $mb2 || $mb2 > $mb3){
    echo "Une des conditions est remplies";
}else{
    echo "Au moins une des deux conditions n'est pas remplies";
}
// XOR (ou exclusif)
echo "<br>";
if($mb1 > $mb2 xor $mb2 > $mb3){
    echo "Une des deux conditions est remplies";
}else{
    echo "Les conditions ne sont pas remplies";
}

// Ecriture ternaire

// ? :

echo "<hr>";
echo "<h2>Les structures conditionnelles (if/else) - Opérateurs s de comparaisons</h2>";

$couleur = "bleu";

switch ($couleur) {
    case 'red': echo "c'est rouge";
        break;
    default: echo "c'est bleu";
        break;
}

echo "<hr>";
echo "<h2>Les fonctions</h2>";

function calcul($arg_1, $arg_2)
{
    echo $arg_1 + $arg_2;
}

calcul(5,20);

echo "<br>";
echo "<h3>Exercice 3</h3>";
echo "<br>";

// Exercice 2 : Écrivez une fonction qui prend en paramètre un montant et un taux et qui applique le taux de TVA, si le taux n'est pas préciser le taux par défaut est de 20%.

function appliqueTVA($montant,$taux = 1.2){
    return $montant * $taux . " €";
}
echo appliqueTVA(100,1.6) ."<br>";
echo appliqueTVA(100);

echo "<hr>";
echo "<h2>Les fonctions prédéfinies</h2>";

// Date() retour la date du jour au format souhaité
echo date("d/M/Y") . "<br>";

// strpos() retourne la postion d'un caractère dans une chaîne de caractère
$phrase = "Je suis une phrase";
echo strpos($phrase, "s") . "<br>";

// strlen retourne la taille d'une chaine de caractère
$text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore ullam consectetur iste enim nobis cupiditate voluptatem, quos sed corrupti doloremque libero magnam explicabo nesciunt at? Aperiam illo quidem perferendis.
Velit, commodi placeat. Iusto cupiditate pariatur expedita in vero magnam omnis aliquid. Aliquid possimus provident, consectetur sapiente, veritatis eveniet non ab quis nihil aperiam error enim qui temporibus nobis porro";
echo strlen($text) . "<br>";
echo iconv_strlen($text) . "<br>"; // Préférable pour des languages avec des caractères spéciaux

// substr permet de récuprer un morceau de chaîne de caractère dans une chaîne de caractère
echo substr($text,0,100) . "<br>";

// function cutSentence($sentence){
//     $cutting = substr($sentence, 0, 100);
//     echo substr($cutting, 0, strrpos($cutting, ' '));
// }

function cutSentence($sentence){
    return substr(substr($sentence, 0, 20), 0, strrpos(substr($sentence, 0, 20), ' '));
}

echo cutSentence($text);
echo "<br>";

// str_contains() retourne true si une chaîne de caractère est contenue dans une autre
// str_starts_with() retourne true si une chaîne de caractère commence par une autre
// str_ends_with() retourne true si une chaîne de caractère se termine par une autre
// var_dump() est une instruction qui permet d'afficher le contenue et le type d'une variable. Elle est très utile pour le débuguage

var_dump(str_contains($text, "Lorem"));

// EXERCICE 4 : Faire une fonction qui prend la saison et la température et affiche 
// "Nous sommes en $saison et il fait $temperature degrés"
// Si la température est égale à 1 ou -1 degré, on affiche degré au singulier
// Si la saison est printemps , on affiche "au" devant le nom de la saison
// Exemple : Nous sommes en hiver et il fait -1 degré
// Si la température est supérieur à 18, on affiche " Et il fait chaud".

echo "<br>";
echo "<h3>Exercice 4</h3>";
echo "<br>";

function afficherTemperature($saison, $temperature) {
    $message = "Nous sommes ";

    if ($saison === 'printemps') {
        $message .= "au ";
    } else {
        $message .= "en ";
    }

    $message .= "$saison et il fait ";

    if ($temperature == 1 || $temperature == -1) {
        $message .= $temperature . " degré";
    } else {
        $message .= $temperature . " degrés";
    }

    if ($temperature > 18) {
        $message .= " Et il fait chaud";
    }

    echo $message;
}

afficherTemperature('hiver', -1);
echo "<br>";
afficherTemperature('printemps', 20);

// Écrivez une fonction appelée "verifierMoyenne" qui prend en paramètre une note , une matière , le prénom et le collège d'un élève et qui affiche la phrase suivante :
//     Si la moyenne est supérieure ou égale à 10, on affiche "Bravo [prénom] ! Vous êtes reçu(e) au [collège] !"
//     Si la moyenne est supérieure ou égale à 8 et inférieure à 10, on affiche "Vous devez passer l'examen de rattrapage en [matière] !"
//     Si la moyenne est inférieure à 8, on affiche "Désolé [prénom] ! Vous êtes recalé(e) !"
    
//     Si aucun nom de collège n'est passé en paramètre, alors le collège par défaut est "Collège de France"
//     Si la note de l'élève n'est pas un nombre, on affiche "La note doit être un nombre !"
//     Si la note de l'élève n'est pas comprise entre 0 et 20, on affiche "La note doit être comprise entre 0 et 20 !"
//     Si le prénom de l'élève n'est pas une chaîne de caractères, on affiche "Le prénom doit être une chaîne de caractères !"
//     Si la matière n'est pas une chaîne de caractères, on affiche "La matière doit être une chaîne de caractères !"
    
//     Si la note est comprise entre 17 et 20, on affiche "Très bien".

echo "<br>";
echo "<h3>Exercice 5</h3>";
echo "<br>";

function verifierMoyenne($note, $matiere, $prenom, $college = "Collège de France") {
    if (!is_numeric($note)) {
        return "La note doit être un nombre !";
    }

    $note = floatval($note);

    if ($note < 0 || $note > 20) {
        return "La note doit être comprise entre 0 et 20 !";
    }

    if (!is_string($prenom)) {
        return "Le prénom doit être une chaîne de caractères !";
    }

    if (!is_string($matiere)) {
        return "La matière doit être une chaîne de caractères !";
    }

    if ($note >= 17 && $note <= 20) {
        return "Très bien";
    } elseif ($note >= 10) {
        return "Bravo $prenom ! Vous êtes reçu(e) au $college !";
    } elseif ($note >= 8 && $note < 10) {
        return "Vous devez passer l'examen de rattrapage en $matiere !";
    } else {
        return "Désolé $prenom ! Vous êtes recalé(e) !";
    }
}

echo verifierMoyenne(20,"physique","Nicolas","Un collège de fou") ."<br>";
echo verifierMoyenne("Oui","maths","Nicolas") ."<br>";
echo verifierMoyenne(18,"maths","Nicolas") ."<br>";
echo verifierMoyenne(12,"maths","Nicolas") ."<br>";
echo verifierMoyenne(12,"maths","Nicolas", "Un collège de fou") ."<br>";
echo verifierMoyenne(9,"maths","Nicolas") ."<br>";
echo verifierMoyenne(5,"maths","Nicolas") ."<br>";
echo verifierMoyenne(5,1000,"Nicolas") ."<br>";
echo verifierMoyenne(5,"maths",1000,"Un collège de fou") ."<br>";  

// echo "<hr>";
// echo "<h2>La portée des variables</h2>";

echo "<hr>";
echo "<h2>Request sql</h2>";

$serveur = 'localhost';
$utilisateur = 'root';
$motDePasse = "";
$nomBaseDeDonnees = 'gestionentreprise';
$connexion = new PDO("mysql:host=$serveur;dbname=$nomBaseDeDonnees", $utilisateur, $motDePasse); 
$connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$resultat = $connexion->query("SELECT * FROM employe");
while ($row = $resultat->fetch(PDO::FETCH_ASSOC)) {
    echo " Nom : " . $row['nom'] . " | Prénom : " . $row['prenom'] . "<br>";
}

//!\\ PHP 7 : A partir de PHP 7, on peut typer les arguments et la valeur de retour d'une fonction.

// declare(strict_types=1); Est une directive qui permet de typer les arguments et la valeur de retour d'une fonction.Elle doit être placée au début du fichier juste après la balise <?php.

function showUser(string $nom, int $age)
{
    return "Bonjour $nom, vous avez $age ans <br>";
}

echo showUser("John", 35);
echo showUser("John", "35");

// Typage de la valeur de retour

function isMajeur(int $age): bool
{
    return $age >= 18;
}
var_dump(isMajeur(5)); // Retourne bool(true).

echo "<br>";
// Fonction fléchée


$addition = fn ($a, $b) => $a + $b; // On stocke la fonction dans une variable.

echo $addition(1, 2); // Affiche 3.
echo "<br>";

$showData = fn ($data) => "Bonjour $data !<br>";

echo $showData("John");

//!\\PHP 8 : A partir de PHP 8, l'argument peut-être d'un type primitif ou d'un autre type.

// function concatene(string|int $a, string|int $b): string|int
// {
//     return $a . $b;
// }

echo concatene("Bonjour ", "tout le monde");
echo "<br>";
echo concatene(1, 2);

echo "<hr><h2>Les structures itératives (boucles)</h2>";

echo "<h3 style='color:blue'>La boucle while</h3>";

// La boucle while permet d'exécuter un bloc de code tant qu'une condition est évaluée à true.

$a = 0; // Valeur de départ de la boucle.
while ($a <= 3) // La condition(tant que $a est <= 3)
{
    echo $a . "--"; // On affiche la valeur de $a.
    $a++; // On incrémente $a de 1 à chaque tour de boucle.
}
echo "<br>";
$a = 0;
while ($a <= 3) // La condition(tant que $a est <= 3)
{
    if ($a == 3)
        echo $a;
    else
        echo $a . "--"; // On affiche la valeur de $a.

    $a++; // On incrémente $a de 1 à chaque tour de boucle.
}

// Exercice 5: En utilisant une boucle while,écrivez un programme qui calcul la somme des entiers compris entre 1 et 100 et affiche le résultat.

echo "<br>";

// Correction
$a = 1; // Valeur de départ de la boucle.
$b = 0; // Somme des entiers compris entre 1 et 100.
while ($a <= 100) {
    $b += $a;
    $a++; //increment de 1
}
echo $b; // Affiche 5050.

echo "<br>";
echo "<h3 style='color:blue'>La boucle for</h3>";

// La boucle for permet d'exécuter un bloc de code un nombre de fois défini à l'avance.
// for (initialisation; condition; sens(incrémentation ou décrémentation))

for ($i = 0; $i <= 10; $i++) {
    echo $i . "==>";
}
echo "<br>";

echo '<select>';
for ($j = 1; $j <= 31; $j++) {
    echo "<option>$j</option>";
}
echo '</select>';

// EXERCICE 6 : En utilisant une boucle for,écrivez un programme qui affiche dans une liste déroulante les années , en partant de l'année en cours et en allant jusqu'à 50 ans en arrière.Faites en sorte que votre code soit pérenne quelque soit l'année en cours.

echo "<br>";


// Correction
echo '<select>';
for ($d = date('Y'); $d >= date('Y') - 50; $d--) {
    echo "<option>$d</option>";
}
echo '</select>';
?>
<select>
    <?php
    for ($d = 0; $d <= 50; $d++) {
        $currentYear = date('Y');
        $currentYear -= $d;
        echo "<option>$currentYear</option>";
    }
    ?>
</select>

<?php

echo "<br>";
echo "<hr><h2>Melande de PHP et HTML</h2>";

echo "<table border='1';>";
echo "<tr>";
echo "<td>1</td>";
echo "<td>2</td>";
echo "<td>3</td>";
echo "<td>4</td>";
echo "</tr>";
echo "</table>";

// Exercice 7 :Faire une boucle qui affiche 10 lignes de 10 cases numérotées de 0 à 99 sur plusieurs lignes dans un tableau HTML.

// METHODE 1
echo "<br>";
echo "<table border='1'>";
$count = 0;
for ($i = 0; $i < 10; $i++) {
    echo "<tr>";
    for ($j = 0; $j < 10; $j++) {
        echo "<td>" . $count . "</td>";
        $count++;
    }
    echo "</tr>";
}
echo "</table>";


echo "<br>";

// METHODE 2
echo "<table border='1'>";
echo "<tr>";
for ($q = 0; $q < 100; $q++) {

    if ($q %  10 == 0) {
        echo "</tr>";
    }
    echo "<td>$q</td>";
};
echo "</table>";

echo "<br>";

// METHODE 3

echo "<table border=1>";

for ($i = 0; $i < 10; $i++) {
    echo "<tr>";
    for ($j = 0; $j < 10; $j++) {
        $r = $j + $i * 10;
        echo "<td>$r</td>";
    }
    echo "</tr>";
}
echo "</table>";

echo "<br>";

echo "<hr><h2>Les tableaux de données (array)</h2>";

// Un tableau de données ou ARRAY en anglais est une variable qui permet de conserver plusieurs valeurs.

// Déclaration d'un tableau de données ARRAY

$liste = array("Grégory", "Nathalie", "Emilie", "François", "Georges");
// OU
$liste2 = ["Grégory", "Nathalie", "Emilie", "François", "Georges"];

// Affichage des données d'un tableau de données ARRAY
// Pour afficher les données d'un tableau de données ARRAY, on utilise la fonction print_r() qui est une fonction d'affichage améliorée.Elle permet d'afficher le contenu d'une variable, d'un tableau ou d'un objet.Elle est principalement utilisée à des fins de débuggage.
echo "<pre>"; // La balise <pre> permet de formater l'affichage du print_r().
print_r($liste);
echo "</pre>";


// var_dump() est une instruction qui permet d'afficher le contenu et le type d'une variable.Elle est très utile pour le débuggage.
echo "<pre>";
var_dump($liste);
echo "</pre>";

// Afficher une valeur d'un tableau de données ARRAY
echo $liste[2]; // Affiche Emilie car les tableaux de données ARRAY sont indexés à partir de 0.

echo "<hr><h2>La boucle foreach</h2>";

// La boucle foreach permet de parcourir un tableau de données ARRAY et d'en afficher les valeurs.
$countryList[] = "France"; // Cette écriture est équivalente à array_push($countryList, "France");Ellle permet d'ajouter une valeur à la fin du tableau.
$countryList[] = "Belgique";
$countryList[] = "Allemagne";
$countryList[] = "Espagne";
$countryList[] = "Italie";
$countryList[] = "Portugal";


var_dump($countryList);

// Pour parcourir un tableau de données ARRAY, on utilise la boucle foreach. qui prend deux arguments : Le tableau à parcourir et la valeur courante à chaque tour de boucle.
foreach ($countryList as $value) {
    echo $value . "<br>";
}

// Ici je lui passe le tableau et je récupure l'index $key et la valeur $value à chaque tour de boucle.
foreach ($countryList as $key => $value) {   //$key contient l'index
    // $value contient la valeur.
    echo $key . "=>" . $value . "<br>";
}

// sizeof() ou count() permet de connaître la taille d'un tableau de données ARRAY.

echo sizeof($countryList); // Affiche 6.
echo "<br>";
echo count($liste); // Affiche 5.

// implode() permet de transformer un tableau de données ARRAY en chaîne de caractère.
echo "<br>";
echo implode(' -- ', $countryList); // Affiche France--Belgique--Allemagne--Espagne--Italie--Portugal.

// Tableau associatif

$tabUser = [
    "prenom" => "John",
    "nom" => "Doe",
    "age" => 35,
    "ville" => "Paris"
];

echo "<br>";
echo $tabUser["prenom"]; // Affiche John.

echo "<hr><h2>Les tableaux multidimensionnels</h2>";

// Un tableau multidimensionnel est un tableau qui contient un ou plusieurs tableaux.

$tabMulti = [
    0 => [
        "prenom" => "John",
        "nom" => "Doe",
        "age" => 35,
        "ville" => "Paris"
    ],
    1 => [
        "prenom" => "Bruno",
        "nom" => "Doe",
        "age" => 35,
        "ville" => "Paris"
    ],
    2 => [
        "prenom" => "Claire",
        "nom" => "Doe",
        "age" => 35,
        "ville" => "Paris"
    ]
];
// Afficher la ville de Bruno
echo $tabMulti[1]["ville"]; // Affiche Paris.

// Afficher le prénom de tous les utilisateurs
foreach ($tabMulti as $value) {
    echo $value["prenom"] . "<br>";
}

for ($i = 0; $i < sizeof($tabMulti); $i++) {
    echo $tabMulti[$i]["prenom"] . "<br>";
}

echo "<hr><h2>Les objets</h2>";

// un objet est un conteneur qui permet de regrouper des variables et des fonctions qui vont manipuler ces variables.

// Une classe est un plan qui va définir la structure d'un objet.

class Vehicule
{
    // public,private,protected represente les niveaux de visibilité des propriétés et des méthodes.
    // public signifie que la propriété est accessible partout.
    public $marque = "Renault"; 

    // protected signifie que la propriété est accessible uniquement à l'intérieur de la classe et des classes héritières.
    protected $couleur = "Rouge";

    // private signifie que la propriété est accessible uniquement à l'intérieur de la classe.
    private $poids = 1000;

    // Une méthode est une fonction déclarée à l'intérieur d'une classe.

    public function demarrer()
    {
        return "Je démarre";
    }

}

// Un objet est une instance d'une classe.

$vehicule = new Vehicule(); // Instanciation de la classe Vehicule.

var_dump($vehicule); // Affiche le contenu de l'objet $vehicule.

echo "<br>";

echo $vehicule->demarrer(); // Affiche Je démarre.

echo "<br>";

echo $vehicule->marque; // Affiche Renault.

echo "<br>";

$vehicule->marque = "Peugeot"; // On modifie la valeur de la propriété $marque.

echo $vehicule->marque; // Affiche Peugeot.

echo "<br>";

//echo $vehicule->couleur; // Erreur car la propriété $couleur est protected.

//echo $vehicule->poids; // Erreur car la propriété $poids est private.