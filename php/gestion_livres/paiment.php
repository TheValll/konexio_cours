<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #eee;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Popins, sans-serif;
    }
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 10px;
        width: 100%;
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
    .success_container {
        background-color: white;
        width: 50%;
        margin: 30px auto;
        text-align: center;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
<header>
    <h1>Home</h1>
    <nav>
        <ul>
            <li><a href="home.php">Accueil</a></li>
            <li><a href="livres.php">Livres</a></li>
        </ul>
    </nav>
</header>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $title = isset($_GET['title']) ? $_GET['title'] : '';
    $author = isset($_GET['author']) ? $_GET['author'] : '';
    $civility = isset($_GET['civility']) ? $_GET['civility'] : '';
    $year = isset($_GET['year']) ? $_GET['year'] : '';
    $pages = isset($_GET['pages']) ? $_GET['pages'] : '';
    $categories = isset($_GET['categories']) ? $_GET['categories'] : [];
    $price = isset($_GET['price']) ? $_GET['price'] : '';
    $description = isset($_GET['description']) ? $_GET['description'] : '';
    $link = isset($_GET['link']) ? $_GET['link'] : '';

    if (!empty($title) && !empty($author) && !empty($civility) && !empty($year) && !empty($pages) && !empty($categories) && !empty($price) && !empty($description) && !empty($link)) {
        echo "<div class='success_container'>";
        echo "Payment successful!" . "<br>";

        foreach ($_GET as $key => $value) {
            echo "$key: $value" . "<br>";
        }
        echo "</div>";
    } else {
        echo "Please provide all the required information.";
    }
}
?>
<footer>
    <p>© 2023 - Tous droits réservés</p>
    <p>Valentin Massonniere</p>
    <?php
        // Afficher la date du jour
        echo date("d/m/Y");
    ?>
</footer>