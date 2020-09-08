var soupe = document.querySelectorAll(".soupe p");
//querySelectorAll selectionne les élements "p" enfants de soupe
var fauteuil = document.querySelectorAll(".fauteuil p");
var lit = document.querySelectorAll(".lit p");
var boire = document.querySelector("#boire");
var reposer = document.querySelector("#reposer");
var dormir = document.querySelector("#dormir");

boire.addEventListener("click", ()=> {
    // addEventListener met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible
    soupe.forEach((elt)=> {
        // forEach permet d'exécuter une fonction donnée sur chaque élément du tableau
        elt.textContent = "Bol vide"
    })
})

reposer.addEventListener("click", ()=> {
    // addEventListener met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible
    fauteuil.forEach((elt)=> {
        // forEach permet d'exécuter une fonction donnée sur chaque élément du tableau
        elt.textContent = "fauteuil souillé"
    })
})

dormir.addEventListener("click", ()=> {
    // addEventListener met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible
    lit.forEach((elt)=> {
        // forEach permet d'exécuter une fonction donnée sur chaque élément du tableau
        elt.textContent = "lit défait"
    })
})



/*- des variables qui récuperent les différents paragraphes correspondants aux divs soupe, fauteuil et lits
- Des variables qui récuperent les Boutons
- Des écouteurs de click liés à ces boutons qui vont lancer chacun une fonctions
- Les fonction boire, se reposer et dormir qui changeront le texte des paragraphes concernés
- Par exemple : lorsque je click sur le bouton à l'id boire, cela appelle la fonction boire qui change les textes de tout les paragraphes de la div soupe en : bol vide.

Ici vous utiliserez des boucles afin qu'une seule instruction change les différents textes.*/

