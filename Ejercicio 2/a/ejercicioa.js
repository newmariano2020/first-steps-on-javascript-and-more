/** 
 *  Consigna:
 * 
 *  crear funcion que en un bar permita: 
 * 
 *- dejar pasar solo a los mayores de edad,
 *- la primer persona que entre despues de las 2 am no paga.
**/

function control() {

   let time = 0;
   let gratis = "a";

   while (time != 300) {

            let edad = prompt("hola, introduce tu edad")

               if (edad > 18) {
                  if (time >= 200 && gratis === "a") {
                     document.write("puedes ingresar, es gratis, diviértete!" + "<br>")
                     gratis = "b"
                  }
                  else {
                    document.write("puedes ingresar, son $200, diviértete!" + "<br>")
                  }
               }
               else {
                  document.write("no puedes ingresar, piérdete!" + "<br>")
               }
            time = (time + 20)      
   }
   document.write("se cerró el antro")
}
control();
