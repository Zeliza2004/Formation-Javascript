function nb_aleatoire(max){
    return 1+ Math.floor(Math.random() * Math.floor(max));
    }

var poissons = nb_aleatoire(3)

document.write("Vous avez attraper le poisson " + poissons + "! Bravo!")

document.getElementById("poisson"+poissons).textContent=("Je suis un poisson mort.")


