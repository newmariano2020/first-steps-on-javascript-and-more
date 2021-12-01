/** 
 *- Consigna:
 *- Crear sistema que ayude a decidir que Aplicacion descargar
 *- Debe indicar cantidad de descargas, peso y puntuacion de las apps 
 *- Se deben poder instalar, abrir, cerrar, desinstalar
 *- 
**/

class aplicaciones {
   constructor(nombre,cantDescargas, puntuacion, tamaño){
   this.nombre = nombre;
   this.cantDescargas = cantDescargas;
   this.puntuacion = puntuacion;
   this.tamaño = tamaño;
   this.informacion = `Nombre de la app: ${nombre}<br> <br> Cantidad de Descargas: ${this.cantDescargas} mil<br> Puntuacion en la Store: ${this.puntuacion} likes <br> Peso total: ${this.tamaño} Mb <br> <br>`;
   };

   instalar = () => {
      document.write(` ${this.nombre} se ha instalado exitosamente <br>`)
   }
   abrir = () => {
      document.write(`has abierto ${this.nombre} <br>`)
   }
   cerrar = () => {
      document.write(`has cerrado ${this.nombre} <br>`)
   }
   desinstalar = () => {
      document.write(`${this.nombre} se ha desinstalado satisfactoriamente <br> <br>`)}

   verInfo = () => {
         document.write(this.informacion)
      }
}

const gifMaker = new aplicaciones(" GifMaker",1500,600,20);
const perroGram = new aplicaciones(" PerroGram",3000,800,60);
const gatobook = new aplicaciones(" Gatobook",7000,300,70);
const pepito = new aplicaciones(" Pepito",2000,2000,30);
const coca = new aplicaciones(" Coca",3500,200,50);
const insulina = new aplicaciones(" Insulina",7000,300,70);
const comidaGato = new aplicaciones(" Comidagato",7050,350,15);

gifMaker.verInfo();
gifMaker.instalar();
gifMaker.abrir();
gifMaker.cerrar();
gifMaker.desinstalar();

perroGram.verInfo();
gatobook.verInfo();
pepito.verInfo();
coca.verInfo();
insulina.verInfo();
comidaGato.verInfo();