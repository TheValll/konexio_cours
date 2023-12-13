<?php

if (isset($_GET['fruit'])) {
    $nom = $_GET['fruit'];
    if ($nom == 'pomme' || $nom == 'poire' || $nom == 'fraise' || $nom == 'cerise') {
        echo '<img src = "' . $nom . '.jpg" alt = "image de ' . $nom . '" width=200px >';
    }else{
        echo '<div class="alert alert-danger">Ce fruit n\'existe pas</div>';
        echo '<a href="tp.php" class="btn btn-primary">Retour</a>';
    }
}else{
    header('Location: tp.php');
    exit();
}
