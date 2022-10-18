
var inpBase = 16

function calcularrem () {
    var conversorrem = resultado / inpBase;
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
      { 
        document.getElementById('resultado').innerHTML = conversorrem;
      }
      else {
        document.getElementById('resultado').innerHTML = "Vazio";
      }
}

function calcularpx () {
    var conversorpx = resultado * inpBase;
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
      { 
        document.getElementById('resultado').innerHTML = conversorpx;
      }
      else {
        document.getElementById('resultado').innerHTML = "Vazio";
      }
}


