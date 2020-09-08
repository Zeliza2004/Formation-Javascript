//Les variables
    //nombre
var nombre = (42)
    console.log(nombre);
    //tableau
var tab = [2, 5, 6, 7, 9]
    console.log(tab);
    //chaine de caracteres
var chaine = ("ceci est une chaine de caracteres")
    console.log(chaine);
//Conditions

    //if, else if ,else
function calculer  (nombre) {
    if (nombre <= 50) {
        return "super moitmoit"
} else if (nombre<=40) {
        return "peux mieux faire"
} else console.log("la grande réponse")
}

    //switch
switch (tab.length) {
    case tab.length = 10:
        console.log("il y a 10 éléments dans le tableau");
        break;
    case tab.length = 5:
        console.log("il y a 5 éléments dans le tableau");
        break;
    case tab.length = 0:
        console.log("le tableau est vide");
        break;
    default:
        console.log("Je ne connais pas le nombre d'éléments du tableau");
}
//Boucles
var compteur = 0
    //while
while(compteur < 5){
    // do somthing
    console.log("Messire, on en a gros")
    compteur = (compteur + 1)

}

    //for
for  (let i = 0; i < tab.length;  i++) {
    console.log("le " + (tab[i]) + " est a la position " + (i+1) + " .")
}


    //Sous forme d'une boucle for, affichez chacun des chiffres contenus dans le tableau tab dans la console