function multiplication(){
    var nbr1, nbr2, sum;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    mul = nbr1 * nbr2;
    document.getElementById("mul").value = mul;
}