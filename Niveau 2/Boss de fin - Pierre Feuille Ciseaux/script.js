var feuille = document.querySelector("#feuille")
var ciseaux = document.querySelector("#ciseaux")
var pierre = document.querySelector("#pierre")
var result = document.querySelector("#result")
var partie = document.querySelector("#partie")
var BTNS = [feuille, ciseaux, pierre]

BTNS.forEach((btn) => {
    btn.addEventListener("click", function () {
        jeu(this.id)
    })
})

function jeu(id) {
    let i = Math.floor(Math.random() * BTNS.length)
    let npc = BTNS[i].id
    let player = id
    partie.textContent = "Ordinateur a joué : " + npc + " / " + "Joueur a joué : " + player
    if ((player == "ciseaux" && npc == "feuille")
        || (player == "feuille" && npc == "pierre")
        || (player == "pierre" && npc == "ciseaux")) {
        result.textContent = "Gagné !"
    } else if (player == npc) {
        result.textContent = "Égalité !"
    }
    else {result
        result.textContent = "Perdu !"
    }
}

