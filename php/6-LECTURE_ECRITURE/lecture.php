<?php
    $data = "fichier.txt";
    $dataTab = file($data);
    foreach ($dataTab as $key => $value) {
        echo $value . "<br>";
    }
?>