## <span style="color:blue;font-weight:bold">TP PHP</span>

Réalisation d'un site de gestion de livres en PHP sans base de données.

### <span style="color:blue;font-weight:bold">Objectifs </span>

Révision des bases de PHP(les variables/les tableaux/les boucles/les conditions/les fonctions/les formulaires/Lecture et écriture dans un fichier)

### <span style="color:blue;font-weight:bold">Consignes </span>

**1** <span style="color:blue;font-weight:bold">Création du header </span>

Créer un fichier home.php un menu de navigation contenant les liens suivants: - Accueil - Livres
Ce menu doit être présent sur toutes les pages du site.

**2** <span style="color:blue;font-weight:bold">Création du footer </span>

Créer un footer contenant votre nom, prenom et l'année. L'année doit être dynamique(c'est à dire qu'elle doit être mise à jour automatiquement chaque année).Ce footer doit être présent sur toutes les pages du site.

**3** <span style="color:blue;font-weight:bold">Création du formulaire d'ajout de livre </span>

Le menu livre doit contenir un formulaire avec les éléments suivants:

- [x] titre
- [x] nom de l'auteur
- [x] sa civilité(case à cocher : M., Mme, Mlle car on peut avoir un groupe d'auteurs)
- [x] année de publication
- [x] nombre de pages
- [x] catégorie(case à cocher : roman, poésie, théâtre, essai, BD, jeunesse)
- [x] prix
- [x] description courte
- [x] lien vers la page d'achat

**4** <span style="color:blue;font-weight:bold">Traitement du formulaire </span>

Lorsque le formulaire est soumis, les données sont envoyées à la page details.php via la méthode POST. Vous devez vérifier que toutes les données ont été envoyées et qu'elles sont valides. Si ce n'est pas le cas, affichez un message d'erreur.
Faites en sorte que les données saisies par l'utilisateur soient pré-remplies dans le formulaire en cas d'erreur.

**5** <span style="color:blue;font-weight:bold">Traitement du formulaire </span>

- [x] Si la longueur du titre est inférieure à 2 caractères et supérieure à 150 caractères, affichez un message d'erreur.
- [x] Si la longueur du nom de l'auteur est inférieure à 2 caractères et supérieure à 150 caractères, affichez un message d'erreur.
- [x] Si l'année de publication n'est pas comprise entre 2000 et 2022 affichez un message d'erreur.
- [x] Si le nombre de pages n'est pas compris entre 1 et 1000, affichez un message d'erreur.
- [x] Si aucune catégorie n'a été sélectionnée, affichez un message d'erreur.Chaque livre doit avoir au moins une des catégories proposées.
- [x] Si le prix n'est pas compris entre 0 et 299, affichez un message d'erreur.
- [x] Si la description est vide ou si elle contient plus de 500 caractères, affichez un message d'erreur.

**6** <span style="color:blue;font-weight:bold">Affichage des données saisies par l'utilisateur </span>

Sur la page details.php, affichez les données saisies par l'utilisateur dans un une card bootstrap avec un bouton paiement qui redirige vers la page d'achat.Puis stocker les données saisies par l'utilisateur dans un fichier livres.txt

Si une donnée n'a pas été saisie ou si elle est invalide, affichez un message d'erreur à la place de la donnée concernée.

Au clic sur le bouton de paiement, les données saisies par l'utilisateur sont envoyées à la page paiement.php via la méthode GET. Vous devez vérifier que toutes les données ont été envoyées et qu'elles sont valides et afficher un message de confirmation de paiement.

**7** <span style="color:blue;font-weight:bold">Achat du livre </span>

Si l'utilisateur essaie d'accéder à la page paiement.php sans cliquer sur le bouton de paiement, vous devez le rediriger vers la page le formulaire de la page livres.php.

**8** <span style="color:blue;font-weight:bold">Affichage des livres stockés dans le fichier livres.txt sur le front </span>

Parcourez le fichier livres.txt et affichez les données de chaque livre dans une card bootstrap sur la page livres.php s'il y a des données dans le fichier.
