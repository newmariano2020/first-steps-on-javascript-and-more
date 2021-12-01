/** 
 *- Consigna:
 *
 *- perfeccionar calculadora para calcular potencia raiz cuadrada y cúbica
 *
**/

let cancelacion = 1;
let num1 = 0;
let num2 = 0;

function suma(num1,num2) {
   let res = num1 + num2;
   document.write("El resultado de la suma solicitada es: <br>" + res) ;
}

function resta(num1,num2) {
   let res = num1 - num2;
   document.write("El resultado de la resta solicitada es: <br>" + res) ;
}

function multiplicacion(num1,num2) {
   let res = num1 * num2;
   document.write("El resultado de la multiplicacion solicitada es: <br>" + res) ;
}

function division(num1,num2) {
   let res = num1 / num2;
   document.write("El resultado de la division solicitada es: <br>" + res) ;
}

function raizcuadrada(num1) {
  let res = Math.sqrt(num1)
  document.write("El resultado de la Raiz Cuadrada solicitada es: <br>" + res);
}

function raizcubica(num1) {
   let res = Math.cbrt(num1)
   document.write("El resultado de la Raiz Cubica solicitada es: <br>" + res);
 }

 function potencia(num1,num2) {
   let res = Math.pow(num1,num2)
   document.write("El resultado de la potencia solicitada es: <br>" + res);
 }

while (cancelacion == 1) {
let consulta = prompt("indica la operacion matematica que deseas realizar: elige entre '+' para suma, '-' para resta, '*' para multiplicacion, '/' para division, 'r2' para Raiz Cuadrada,'r3' para Raiz Cúbica o 'potencia' para efectuar una potencia")
   if (consulta == "+") {
      num1 = parseInt(prompt("inserta el primer numero a sumar"));
      num2 = parseInt(prompt("indica el segundo numero a sumar"));
      suma(num1,num2);     
   }

   if (consulta == "-") {
      num1 = prompt("inserta el primer numero a restar")
      num2 = prompt("indica el segundo numero a restar")
      resta(num1,num2);     
   }

   if (consulta == "*") {
      num1 = prompt("inserta el primer numero a multiplicar")
      num2 = prompt("indica el segundo numero a multiplicar")
      multiplicacion(num1,num2);     
   }

   if (consulta == "/") {
      num1 = prompt("inserta el primer numero a dividir")
      num2 = prompt("indica el segundo numero a dividir")
      division(num1,num2);     
   }

   if (consulta == "r2") {
      num1 = prompt("inserta el numero a operar con raiz cuadrada")
      raizcuadrada(num1)
   }

   if (consulta == "r3") {
      num1 = prompt("inserta el numero a operar con raiz Cubica")
      raizcubica(num1)
   }

   if (consulta == "potencia") {
      num1 = prompt("inserta el numero que operará como base en la potencia")
      num2 = prompt("ingresa el numero que operará como exponente en la potencia")
      potencia(num1,num2)
   }

   let cancelacion = prompt("indica si deseas realizar una nueva operacion matematica con 1 para si o 2 para no")
};