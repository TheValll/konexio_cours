<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=images', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    function isFileSelected($file)
    {
        return !empty($file['name']);
    }

    function isFileExtensionAllowed($file, $allowedExtensions)
    {
        $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        return in_array($fileExtension, $allowedExtensions);
    }

    function isFileSizeAllowed($file, $maxSize)
    {
        return $file['size'] < $maxSize;
    }

    function generateUniqueFileName($file)
    {
        $fileName = uniqid() . '_' . $file['name'];
        return $fileName;
    }

    function moveUploadedFile($file, $destination)
    {
        move_uploaded_file($file['tmp_name'], $destination);
    }

    function insertImageToDatabase($bdd, $fileName, $title)
    {
        $requete = $bdd->prepare('INSERT INTO pictures (nom, pictures_name) VALUES (?, ?)');
        $requete->execute([$fileName, $title]);
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $imageFile = $_FILES['image'];
        $title = $_POST['titre'];

        $maxFileSize = 1000000;
        $uploadDirectory = 'uploads/';
        $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        if (isFileSelected($imageFile) && isFileExtensionAllowed($imageFile, $allowedExtensions) && isFileSizeAllowed($imageFile, $maxFileSize)) {
            $fileName = generateUniqueFileName($imageFile);
            moveUploadedFile($imageFile, $uploadDirectory . $fileName);
            insertImageToDatabase($bdd, $fileName, $title);
            echo "<img src='uploads/$fileName' alt='Image uploadée'>";
        } else {
            $request2 = $bdd->query('SELECT * FROM pictures WHERE pictures_name = "' . $fileName . '"');
            $resultat2 = $request2->fetch(PDO::FETCH_ASSOC);
            echo "<img src='uploads/$resultat2' alt='Image uploadée'>";
        }
    }
} catch (Exception $e) {
    echo 'Erreur : ' . $e->getMessage();
}
?>