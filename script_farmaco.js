function calcula(){
            
    let txtpeso = window.document.getElementById('peso').value
    /* var dose = Number(txtdose.value) */ /* Pode colocar dessa forma acima em vez de usar essa linha = .value */
    let txtconcentracao = window.document.getElementById('concentracao').value

    let dose = txtpeso * txtconcentracao
    liquido.innerHTML = dose + " ml"


/* COMPRIMIDO */

let txtConcentComprimido = window.document.getElementById('concentComp').value

let ConcenCompr = dose / txtConcentComprimido;
/* window.alert(ConcenCompr); */




/* ConcenCompr = 0.25 */

let partes = ConcenCompr.toString();
const array = partes.split(".");

let Snum = array[1];
let multDez = array[1].length;
let deno = Math.pow(10, multDez);

let num = parseInt(Snum);
let PartInt = 200;




for(var i = Math.max(num, deno); i > 1; i--) {
    if ((num % i == 0) && (deno % i == 0)) {
        num /= i;
        deno /= i;
    }
    if ((num == 1) && (deno == 1)){
        PartInt = PartInt + 1;
    }
}


/* SET do Resultado no HTML*/
fracionado.innerHTML = num + "/" + deno;
inteiro.innerHTML = PartInt;




















}

