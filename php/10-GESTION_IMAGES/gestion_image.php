<!DOCTYPE html>
<html>
<head>
    <title>Formulaire d'upload d'images</title>
    <style>
        body {
            margin: 10px 0;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
</head>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
    <!-- enctype="multipart/form-data" : obligatoire pour pouvoir récupérer les fichiers uploadés -->
    <input type="text" name="titre" placeholder="Titre de l'image">
    <input type="file" name="image" id="image" onchange="previewImage(event)">
    <img id="preview" src="#" alt="Preview Image" style="display: none; max-width: 200px; max-height: 200px;">
    <input type="submit" value="Envoyer">
</form>

<script>
    function previewImage(event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var preview = document.getElementById('preview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
</body>
</html>
