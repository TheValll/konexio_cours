// Accédez à l'élément iframe par son ID
var iframeNouvellePage = document.getElementById("iframeNouvellePage");

// Vous pouvez manipuler l'iframe comme suit, par exemple pour changer sa source (URL) dynamiquement :
function chargerNouvellePage() {
  var nouvelleURL = "./oui.html";
  iframeNouvellePage.src = nouvelleURL;
}

// Appelez la fonction pour charger une nouvelle page dans l'iframe lorsque vous en avez besoin
chargerNouvellePage();
