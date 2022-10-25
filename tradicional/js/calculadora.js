function insert (num)  {
   var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean () {
    document.getElementById('resultado').innerHTML = ""
}

function back () {
    var resultadoX = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultadoX.substring(0, resultadoX.length -1)
}

function calcular () {
    var resultadoX = document.getElementById('resultado').innerHTML;
    if (resultadoX)
      { 
        document.getElementById('resultado').innerHTML = eval(resultadoX);
      }
      else {
        document.getElementById('resultado').innerHTML = "0";
      }
}