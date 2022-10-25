/* DE: Pixel - PARA: Rem */

function rem(){
    var valorpx = document.getElementById('resultado').innerHTML;
    
    var base = 16;

    var valorrem = valorpx / base;

    /* alert(valorpx); */

    /* alert(base);  */ 

    /* alert(valorrem); */

    if (valorrem)
    { 
      document.getElementById('resultado').innerHTML = eval(valorrem);
    }
    else {
      document.getElementById('resultado').innerHTML = "0";
    }
}


/* DE: Rem - PARA: Pixel */

function px(){
    var valorrem = document.getElementById('resultado').innerHTML;
    
    var base = 16;

    var valorpx = valorrem * base;

    /* alert(valorpx); */

    /* alert(base);  */ 

    /* alert(valorrem); */

    if (valorpx)
    { 
      document.getElementById('resultado').innerHTML = eval(valorpx);
    }
    else {
      document.getElementById('resultado').innerHTML = "0";
    }
}