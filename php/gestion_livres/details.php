<style>
    * {
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
    .error_container {
        background-color: white;
        width: 50%;
        margin: 30px auto;
        text-align: center;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 1.2em;
    }
    .error_display {
        color: red;
        margin: 5px 0;
    }
    .container {
        background-color: white;
        width: 50%;
        margin: 30px auto;
        text-align: center;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 1.2em;
        li{
            margin: 5px 0;
            list-style: none;
        }
    }
    .buy_btn {
        margin: 10px 0;
        width: 100px;
        height: 50px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1.2em;
        a{
            text-decoration: none;
            color: white;
        }
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
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];

    // Validate data
    if (empty($_POST['title']) || strlen($_POST['title']) < 2 || strlen($_POST['title']) > 150) {
        $errors[] = "Invalid title. Title must be between 2 and 150 characters.";
    }

    if (empty($_POST['author']) || strlen($_POST['author']) < 2 || strlen($_POST['author']) > 150) {
        $errors[] = "Invalid author name. Author name must be between 2 and 150 characters.";
    }

    if (empty($_POST['civility'])) {
        $errors[] = "No civility selected. Please select at least one civility.";
    }

    if (empty($_POST['year']) || $_POST['year'] < 2000 || $_POST['year'] > 2022) {
        $errors[] = "Invalid publication year. Year must be between 2000 and 2022.";
    }

    if (empty($_POST['pages']) || $_POST['pages'] < 1 || $_POST['pages'] > 1000) {
        $errors[] = "Invalid number of pages. Pages must be between 1 and 1000.";
    }

    if (empty($_POST['categories'])) {
        $errors[] = "No category selected. Please select at least one category.";
    }

    if (empty($_POST['price']) || $_POST['price'] < 0 || $_POST['price'] > 299) {
        $errors[] = "Invalid price. Price must be between 0 and 299.";
    }

    if (empty($_POST['description']) || strlen($_POST['description']) > 500) {
        $errors[] = "Invalid description. Description cannot be empty and must be less than 500 characters.";
    }

    if (empty($_POST['link'])) {
        $errors[] = "Invalid link. Link cannot be empty.";
    }

    // Get data

    $title = isset($_POST['title']) ? $_POST['title'] : '';
    $author = isset($_POST['author']) ? $_POST['author'] : '';
    $civility = isset($_POST['civility']) ? $_POST['civility'] : '';
    $year = isset($_POST['year']) ? $_POST['year'] : '';
    $pages = isset($_POST['pages']) ? $_POST['pages'] : '';
    $categories = isset($_POST['categories']) ? $_POST['categories'] : [];
    $price = isset($_POST['price']) ? $_POST['price'] : '';
    $description = isset($_POST['description']) ? $_POST['description'] : '';
    $link = isset($_POST['link']) ? $_POST['link'] : '';

    if (!empty($errors)) {
        echo "<div class='error_container'>";
        foreach ($errors as $error) {
            echo "<p class='error_display'>$error</p>";
        }
        echo "</div>";
    } else {

        // Display data

        echo "<div class='container'>";
        echo '<p>Titre : ' . ($title ? $title : 'Missing title') . '</p>';
        echo '<p>Auteur : ' . ($author ? $author : 'Missing author') . '</p>';
        echo '<p>Civilité : ' . ($civility ? $civility : 'Missing civility') . '</p>';
        echo '<p>Année de publication : ' . ($year ? $year : 'Missing year') . '</p>';
        echo '<p>Nombre de pages : ' . ($pages ? $pages : 'Missing pages') . '</p>';
        if (!empty($categories)) {
            echo '<p>Catégories:</p>';
            echo '<ul>';
            foreach ($categories as $category) {
                echo '<li>' . $category . '</li>';
            }
            echo '</ul>';
        } else {
            echo 'Missing categories';
        }
        echo '<p>Prix : ' . ($price ? $price : 'Missing price') . '</p>';
        echo '<p>Description : ' . ($description ? $description : 'Missing description') . '</p>';

        echo '<p> Acheter ici : <a href="' . ($link ? $link : '#') . '">' . ($link ? $link : 'Missing link') . '</a></p>';

        $categoriesString = implode(',', $categories);
        echo '<button class="buy_btn"><a href="paiment.php?title=' . urlencode($title) . '&author=' . urlencode($author) . '&civility=' . urlencode($civility) . '&year=' . urlencode($year) . '&pages=' . urlencode($pages) . '&categories=' . urlencode($categoriesString) . '&price=' . urlencode($price) . '&description=' . urlencode($description) . '&link=' . urlencode($link) .'">Payer</a></button>';
        echo "</div>";

        // Write to file
        $ficher = fopen('fichier.txt', 'a');
        fwrite($ficher, "Title : " . $title . "\n");
        fwrite($ficher, "Write by " . $civility . " " . $author . "\n");
        fwrite($ficher, "Write in " . $year . "\n");
        fwrite($ficher, "This book has " . $pages . " pages" . "\n");
        foreach ($categories as $category) {
            fwrite($ficher, $category . "\n");
        }
        fwrite($ficher, "This book cost " . $price . " €". "\n");
        fwrite($ficher, "Here a description of the book : " . $description . "\n");
        fwrite($ficher, "Here the link to buy it : <a href='" . ($link ? $link : '#') . "'>" . ($link ? $link : 'Missing link') . "</a>\n");  
        fwrite($ficher, " \n");  
        fclose($ficher);
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