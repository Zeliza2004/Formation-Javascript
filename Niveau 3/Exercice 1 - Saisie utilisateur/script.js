let bon1 = document.getElementById("bouton1");
let btn2 = document.getElementById("bouton2");

bon1.addEventListener("click", function (){
 alert("Hello World!");
});

btn2.addEventListener("click", say_hello);

function say_hello () {
    let name = '';
    while (name.length > 15 || name.length < 1) {
        name = prompt('Entrez votre nom: ');
       // si la longueur est strictement inférieure a 1 ou longueur strictement supérieur a 15, alors on boucle
    }
    if (confirm(`Vous vous appelez vraiment ` + name + ' ?')) {
        alert("Bonjour " + name);
    }
    else {
        say_hello();
    }
}
