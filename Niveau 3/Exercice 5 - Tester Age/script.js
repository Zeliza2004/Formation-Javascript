const age = (prompt("Quel age avez-vous ?"));
if (age > 0 && age < 18) {
    document.write("Vous n'avez pas le droit de venir sur ce site");}
if (age >= 18 && age <= 50) {
    document.write("Vous êtes majeur mais pas encore senior, la vie est belle")
}
if (age >= 51 && age <= 60){
    document.write("Vous êtes senior mais pas encore retraité");
}
if (age > 61) {
    document.write("Vous êtes retraité, profitez de votre temps libre !");
}

if (isNaN(age) || age < 0) {
    //isNaN is not a number
    document.write("Je n'ai pas compris!");
}