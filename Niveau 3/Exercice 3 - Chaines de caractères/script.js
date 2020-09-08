function str_fisrt_letter(abc){
    /*L'expression régulière qui ^[a-d] pour tester si la chaîne commence par une lettre entre a et
    le modificateur i pour ne pas faire de différence entre majuscules et minuscules
    L'écriture litérale d'une expression à un format propre, elle est incluse entre deux barres inclinées.
    Les crochets désignent un groupe alternatif. On recherche l'un ou l'autre des éléments dans la liste.
    ^ = Spécifie que l'élément qui suit, caractère ou groupe,
    doit être placé au début du texte pour qu'il corresponde à la recherche.*/
    var pattern =/^[a-d]/i;
    var res = document.getElementById("resultat1");
    if(pattern.test(abc)){
        res.innerHTML=abc+" chaîne valide  commence par une lettre entre a et d ";
    }
    else {
        res.innerHTML=abc+" chaîne invalide ";
    }
}

function str_email(exe){
    var res = document.getElementById("resultat2");
   /*La fonction split(@) transforme la chaîne en tableau de sous chaines à partir du
    caractère séparateur ici '@' .Si c.lenght=1 donc la chaîne ne contient pas @
    et si c.lenght>2 alors il contient plusieurs '@' */
    var c =exe.split('@');
    if(c.length==2){
        res.innerHTML=exe+" chaîne valide : contient un seul caractère @  ";
    }
    else {
        res.innerHTML="chaîne invalide!";
    }
}


function str_number(exe){
    var res = document.getElementById("resultat3");
    var pattern =/\d/;
/*La fonction search peut prendre en paramètre une expression régulière*/
    if(exe.search(pattern)!==-1){
        res.innerHTML=exe+" chaîne valide : contient un nombre  ";
    }
    else {
        res.innerHTML=exe+" chaîne invalide : ne contient pas un nombre  ";
    }
}


function str_replace(exe){
    var res = document.getElementById("resultat4");
   /* La fonction replace peut prendre en paramètre une expression régulière
    ici le modificateur g pour un recherche globale afin de remplacer tous les
    chiffres de la chaîne*/
    exe=exe.replace(/\d/g,"*");
    res.innerHTML=exe2;

}


