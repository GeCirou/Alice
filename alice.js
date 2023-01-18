var min = 1;
var max = 6;

var d1, d2;

function numeroAleatorio(min, max) { 
    return parseInt(Math.random() * (max - min) + min);
}

function dice() { 
    d1 = numeroAleatorio(min, max);
    d2 = numeroAleatorio(min, max);
    document.getElementById('lbl1').innerHTML = d1 ;
    document.getElementById('lbl2').innerHTML = d2;
}
