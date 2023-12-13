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
        echo "Payment successful! . " . "<br>";

        foreach ($_GET as $key => $value) {
            echo "$key: $value . " . "<br>";
        }
    } else {
        echo "Please provide all the required information.";
    }
}
?>