var addition = function addition() {
    let nbr1, sum;
    nbr1 = Number(document.getElementById("nbr1").value);
    sum = nbr1 + 10;
    document.getElementById("sum").value = sum;
}

function multiplication() {
    let mul = addition * 4;
    document.getElementById("mul").value = mul;
    }
