/** 
 * Consigna:
 * 
 * crear calculadora
**/
let cancelacion = 1;
let num1 = 0;
let num2 = 0;

function suma(num1,num2){
   let resultado = num1 + num2;
   document.write("El resultado de la suma solicitada es: <br>" + resultado) ;
};

function resta(num1,num2){
   let resultado = num1 - num2;
   document.write("El resultado de la resta solicitada es: <br>" + resultado) ;
};

function multiplicacion(num1,num2){
   let resultado = num1 * num2;
   document.write("El resultado de la multiplicacion solicitada es: <br>" + resultado) ;
};

function division(num1,num2){
   let resultado = num1 / num2;
   document.write("El resultado de la division solicitada es: <br>" + resultado) ;
};

while (cancelacion == 1) {
let consulta = prompt("indica la operacion matematica que deseas realizar, elige entre + para suma, - para resta * para multiplicacion o / para division")
   
   if (consulta == "+"){
      num1 = parseInt(prompt("inserta el primer numero a sumar"));
      num2 = parseInt(prompt("indica el segundo numero a sumar"));
      suma(num1,num2);     
   }

   if (consulta == "-"){
      num1 = prompt("inserta el primer numero a restar")
      num2 = prompt("indica el segundo numero a restar")
      resta(num1,num2);     
   }

   if (consulta == "*"){
      num1 = prompt("inserta el primer numero a multiplicar")
      num2 = prompt("indica el segundo numero a multiplicar")
      multiplicacion(num1,num2);     
   }

   if (consulta == "/"){
      num1 = prompt("inserta el primer numero a dividir")
      num2 = prompt("indica el segundo numero a dividir")
      division(num1,num2);     
   }
   
   let cancelacion = prompt("indica si deseas realizar una segunda operacion matematica con 1 para si o 2 para no")

};