<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
        *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Popins, sans-serif;
    }
    body{
        background-color: #eee;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 10px
    }
    nav ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style-type: none;
    }
    nav ul li a{
        text-decoration: none;
        color: white;
        margin: 0 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 30px auto;
        width: 50%;
        height: 100%;
        background-color: white;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 1.2em;
    }
    input{
      margin: 5px 0;
    }
    #submit{
      margin: 10px 0;
        width: 100px;
        height: 50px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1.2em;
    }
    footer{
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
        width: 100%;
        height: 75px;
        margin-top: auto;
    }
  </style>
  <body>
  <header>
  <h1>Livres</h1>
    <nav>
      <ul>
        <li><a href="home.php">Accueil</a></li>
        <li><a href="#">Livres</a></li>
      </ul>
    </nav>
  </header>
    <form action="details.php" method="POST">
      <div>
        <label for="title">Titre</label>
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label for="author">Auteur</label>
        <input type="text" name="author" id="author" />
      </div>
      <div>
        <span>Civilité :</span>
        <label for="homme">Mr</label>
        <input type="radio" name="civility" id="homme" value="Mr"/>
        <label for="femme">Mme</label>
        <input type="radio" name="civility" id="femme" value="Mme"/>
        <label for="mademoiselle">Mlle</label>
        <input type="radio" name="civility" id="mademoiselle" value="Mlle"/>
      </div>
      <div>
        <label for="year">Année de publication</label>
        <input type="text" name="year" id="year" />
      </div>
      <div>
        <label for="pages">Nombre de pages</label>
        <input type="text" name="pages" id="pages" />
      </div>
      <div>
        <span>Catégorie :</span>
        <label for="roman">roman</label>
        <input type="checkbox" name="categories[]" id="roman" value="roman"/>

        <label for="poesie">poésie</label>
        <input type="checkbox" name="categories[]" id="poesie" value="poésie"/>

        <label for="theatre">théâtre</label>
        <input type="checkbox" name="categories[]" id="theatre" value="théâtre"/>

        <label for="essai">essai</label>
        <input type="checkbox" name="categories[]" id="essai" value="essai"/>

        <label for="bd">BD</label>
        <input type="checkbox" name="categories[]" id="bd" value="BD"/>

        <label for="jeunesse">jeunesse</label>
        <input type="checkbox" name="categories[]" id="jeunesse" value="jeunesse"/>
      </div>
      <div>
        <label for="price">Prix</label>
        <input type="text" name="price" id="price" />
      </div>
      <div>
        <label for="description">Description courte</label>
        <input type="text" name="description" id="description" />
      </div>
      <div>
        <label for="link">Lien vers la page d'achat</label>
        <input type="text" name="link" id="link" />
      </div>
      <input type="submit" value="Envoyer" id="submit"/>
    </form>
    <footer>
      <p>© 2023 - Tous droits réservés</p>
      <p>Valentin Massonniere</p>
      <?php
        // Afficher la date du jour
        echo date("d/m/Y");
    ?>
    </footer>
  </body>
</html>
