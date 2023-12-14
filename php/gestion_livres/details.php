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
        foreach ($errors as $error) {
            echo $error . '<br>';
        }
    } else {

        // Display data

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
        echo '<button><a href="paiment.php?title=' . urlencode($title) . '&author=' . urlencode($author) . '&civility=' . urlencode($civility) . '&year=' . urlencode($year) . '&pages=' . urlencode($pages) . '&categories=' . urlencode($categoriesString) . '&price=' . urlencode($price) . '&description=' . urlencode($description) . '&link=' . urlencode($link) .'">Payer</a></button>';

        // Write to file
        $ficher = fopen('fichier.txt', 'a');
        fwrite($ficher, $title . "\n");
        fwrite($ficher, $author . "\n");
        fwrite($ficher, $civility . "\n");
        fwrite($ficher, $year . "\n");
        fwrite($ficher, $pages . "\n");
        foreach ($categories as $category) {
            fwrite($ficher, $category . "\n");
        }
        fwrite($ficher, $price . "\n");
        fwrite($ficher, $description . "\n");
        fwrite($ficher, $link . "\n");  
        fwrite($ficher, " \n");  
        fclose($ficher);
    }
}
?>
