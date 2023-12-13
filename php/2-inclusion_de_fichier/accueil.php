<?php
/* 
INCLUSION DE FICHIER

L'inclusion de fichier permet de découper son code en plusieurs fichiers. Cela permet de mieux s'organiser et de mieux structurer son code. Cela permet aussi de réutiliser du code.

Pour inclure un fichier, on utilise la fonction include ou require. La différence entre les deux est que si le fichier n'existe pas, include génère une erreur et continue l'exécution du script alors que require génère une erreur et arrête l'exécution du script.

On peut aussi utiliser include_once ou require_once pour inclure un fichier une seule fois. Cela permet d'éviter d'inclure plusieurs fois le même fichier.

On peut inclure des fichiers PHP, HTML, CSS, JS, etc.
Ici je cré un dossier partials dans lequel je mets mes fichiers header.php et footer.php. Je les inclue ensuite dans mes fichiers accueil.php, apropos.php et contact.php.

*/

require_once 'partials/header.php';
?>

    <div class="container">
        <div class="card mb-3 mt-3" style="max-width: 900px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_1280.jpg" class="img-fluid rounded-start" alt=".noel">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3 mt-3" style="max-width: 900px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/03/26/christmas-1867048_1280.jpg" class="img-fluid rounded-start" alt=".noel">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3 mt-3" style="max-width: 900px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/34/christmas-2918_1280.jpg" class="img-fluid rounded-start" alt=".noel">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

<?php
include 'partials/footer.php';
?>