

var refran1 = "No por más madrugar, amanece más temprano";
var refran2 = "Cillo en Moncayo ponte a caballo";
var refran3 = "Ni manjar recalentado ni enemigo reconciliado";
var refran4 = "No comer sin beber ni firmar sin leer";
var refran5 = "A conejo te convido (mañana voy a cazar) si le tiro y no le atino te vuelvo a desconvidar";
var refranes = [refran1,refran2,refran3,refran4,refran5];

var velocidad = 1000;//Velocidad a la que salen las letras
var myVar;//Para guardar el intervalo
var aleatorio ;//Guardare los numeros aleatorios
var arrayRefran ;//Guardo el array que se va completando poco a poco con el refran
var contador=0;//Cuento las letras que ya han salido.



function rellenaGuiones(refran) {//Rellena un array de la longitud de la cadena con guiones.
var array = [];

for (var i = 0; i < refran.length; i++) {

  if (refran.charAt(i) == " ") {
    array[i]=" ";
  }else {
    array[i]="-";;
    contador++;//Si habia una letra la cuento

  }
}

return array;

}

function completaRefran(array,refran){//Genera numeros aleatorios para ir completando el refrán


do{
  var nuevaPosicion = Math.floor(Math.random() * array.length);

}while (array[nuevaPosicion] != "-" | array[nuevaPosicion] == " ");//Mientras no salga guion o salga espacio

array[nuevaPosicion] = refran.charAt(nuevaPosicion);//Cambio el guion por la letra

if (--contador==0) {//Si el contador a llegado a 0 es que han salido todas las letras
  terminar();//Paro el tiempo
}

printea(array);//Muestro el array


}

function printea(array){//Inserta en html la cadena de divs
  document.getElementById("refran").innerHTML= muestraArray(array);

}

function printeaSolucion(refran){//Inserta en html la cadena de divs con el refran resuelto
  document.getElementById("refran").innerHTML= resuelvePanel(refran);

}

function muestraArray(array){//Recibe el array y devuelve los divs correspondientes

var cadena = "";

for (var i = 0; i < array.length; i++) {
  if (array[i] == " ") {
    cadena = cadena +"<div class='espacio'>"+ array[i]+ "</div>";
  }else {
    if (array[i] == "-") {
      cadena = cadena +"<div></div>";
    }else{
      cadena = cadena +"<div>"+array[i]+"</div>";

    }


  }
}


return cadena;

}

function resuelvePanel(refran){//Recibe el refran y genera una cadena de divs con el refrán resuelto

  var cadena = "";

  for (var i = 0; i < refran.length; i++) {
    if (refran.charAt(i) == " ") {
      cadena = cadena +"<div class='espacio'></div>";
    }else {

        cadena = cadena +"<div>"+refran.charAt(i)+"</div>";
      }


    }


  return cadena;

}

//Funciones de Interval

function parar(){

  clearInterval(myVar);
  document.getElementById('reanudar').disabled=false;
  document.getElementById('empezar').disabled=false;
  document.getElementById('parar').disabled=true;

}

function empezar(){
 aleatorio = Math.floor(Math.random()*refranes.length);
 contador=0;
 arrayRefran = rellenaGuiones(refranes[aleatorio]);
 myVar = setInterval(completaRefran, velocidad ,arrayRefran,refranes[aleatorio]);
 document.getElementById('reanudar').disabled=true;
 document.getElementById('empezar').disabled=true;
 document.getElementById('parar').disabled=false;
 document.getElementById('resolver').disabled=false;

}

function reanudar(){
myVar = setInterval(completaRefran, velocidad ,arrayRefran,refranes[aleatorio]);
document.getElementById('reanudar').disabled=true;
document.getElementById('empezar').disabled=true;
document.getElementById('parar').disabled=false;

}

function resolver(){

clearInterval(myVar);
printeaSolucion(refranes[aleatorio]);
document.getElementById('reanudar').disabled=true;
document.getElementById('parar').disabled=true;
document.getElementById('resolver').disabled=true;
document.getElementById('empezar').disabled=false;

}

function terminar(){
clearInterval(myVar);
document.getElementById('reanudar').disabled=true;
document.getElementById('parar').disabled=true;
document.getElementById('resolver').disabled=true;
document.getElementById('empezar').disabled=false;


}
