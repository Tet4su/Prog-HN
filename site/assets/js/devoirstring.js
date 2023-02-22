// exercice 1
function prenom() {
    // on récupère le prénom on le met dans l'élément avec id holder1
    // compléter le code ici
	var prenom=document.getElementById("prenom").value;
	document.getElementById("holder1").innerHTML = prenom;
}

function nomdefamille() {
    // on récupère le nom on le met dans l'élément avec id holder1
    // compléter le code ici
	var nomdefamille=document.getElementById("nomdefamille").value;
	document.getElementById("holder1").innerHTML = nomdefamille;
}

function nomcomplet() {
    // on concatène prénom et nom pour afficher le nom entier et on met le résultat dans l'élément avec id holder1
    // compléter le code ici
	
let text1 = document.getElementById("prenom").value;
let text2 = document.getElementById("nomdefamille").value;
let text3 = text1.concat(" ", text2)
document.getElementById("holder1").innerHTML = text3;

}


// exercice 2
function segmentText() {
    // on récupère le texte de l'élément d'id texte, on le découpe et on le place dans l'élément avec id holder2
    // compléter le code ici
	
var texte = document.getElementById("texte").value;
document.getElementById("holder2").innerHTML = texte.split(new RegExp(" "));
}
