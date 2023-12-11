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

