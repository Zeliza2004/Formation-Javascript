let tableau = [];
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");



btn1.addEventListener("click", (function (){
    let nom = prompt("Quel est votre prénom?");
    tableau.push(nom);
    console.log(tableau);
}));

btn2.addEventListener("click", (function nomAleatoire(){
    let nbalea = Math.floor(Math.random() * tableau.length);
    alert("Le gagnant est: " + tableau[nbalea]);
}));