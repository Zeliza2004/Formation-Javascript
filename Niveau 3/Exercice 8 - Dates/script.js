let d = new Date();
let s = new Date("jun 14, 2021");
let f = s - d;
f = Math.floor(f / 86400000);

document.write("<div>Nous somme le " + d + "</div>")
document.write("<div>Votre anniversaire aura lieu le " + s + "</div>")
document.write("<div>Il reste " + f + " jours avant votre anniversaire</div>")

