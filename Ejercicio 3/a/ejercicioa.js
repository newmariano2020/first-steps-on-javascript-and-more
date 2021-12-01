/** 
 *  Consigna:
 *- crear sistema para mostrar al usuario las particularidades de los celulares
 *- cada uno debe tener color, peso, resolucion de pantalla, camara y memoria ram
 *- deben poder prender, tomar fotos, reiniciar y grabar
 *- 2 celulares de alta gama , pueden:
 *- grabar en slow-motion, tienen reconocimiento facial, camara extra
 
 * 
 * 
**/
class celulares {
   constructor(modelo,color,peso,resolucionPantalla,camara,memoriaRam) {
   this.modelo = modelo;
   this.color = color;
   this.peso = peso;
   this.resolucionPantalla = resolucionPantalla;
   this.camara = camara;
   this.memoriaRam = memoriaRam;
   this.informacion = `Modelo:${this.modelo}<br><br> Color:${this.color}<br>Peso:${this.peso}<br> gramos,Resolucion de Pantalla:${this.resolucionPantalla}<br>Camara:${this.camara}<br> MP,Memoria Ram:${this.memoriaRam}Giga <br><br>`;
   }

   prenderCelular = () => {
         document.write(`${this.modelo} se ha encendido <br>`)
      };
   tomarFoto = () => {
         document.write("Has capturado una foto <br>")
      }
   grabarCelular = () => {
         document.write("Has grabado <br>")
      }
   reiniciarCelular = () => {
         document.write(`${this.modelo} se ha reiniciado <br><br>`)
      }
   
   verInfo = () => {
      document.write(this.informacion)
   }
}

const nokia6131 = new celulares("Nokia 6131","negro",110,"450x300",300,1);
const nokia1100 = new celulares("Nokia 1100","blanco",150,"600x350",250,1);
const lg6 = new celulares("LG 6","gris",130,"500x400",350,2);

class altaGama extends celulares {
   constructor(modelo,color,peso,resolucionPantalla,camara,memoriaRam,camaras){
      super(modelo,color,peso,resolucionPantalla,camara,memoriaRam)
      this.camaras = camaras;
      this.informacionAltagamma = `Modelo:${this.modelo}<br><br> Color:${this.color}<br>Peso:${this.peso}<br> gramos,Resolucion de Pantalla:${this.resolucionPantalla}<br>Camara:${this.camara}<br> MP,Memoria Ram:${this.memoriaRam}Giga <br> Cantidad de Camaras: ${camaras}<br><br>`;
   }
   infoAltagamma = () => {
      document.write(this.informacionAltagamma)
   }
   slowMotion = () => {
      document.write(`${this.modelo} está grabando en camara lenta <br>`)
   }
   reconocimientoFacial = () => {
      document.write(`Has activado el reconocimiento facial del ${this.modelo} <br><br>`)
   }
}

const motorolaX = new altaGama("Motorola X","cobre",135,"750x1024",600,2,2);
const samsungGalaxy = new altaGama("Samsung Galaxy","amatista",140,"800x1024",800,2,2);
const xiaomiRedmy = new altaGama("xiaomi Redmy","crema",120,"750x1024",750,2,3);

document.write(nokia6131.informacion);
nokia6131.prenderCelular();
nokia6131.tomarFoto();
nokia6131.grabarCelular();
nokia6131.reiniciarCelular();

nokia1100.verInfo();
nokia1100.prenderCelular();
nokia1100.tomarFoto();
nokia1100.grabarCelular();
nokia1100.reiniciarCelular();

lg6.verInfo();
lg6.prenderCelular();
lg6.tomarFoto();
lg6.grabarCelular();
lg6.reiniciarCelular();

motorolaX.infoAltagamma();

motorolaX.prenderCelular();
motorolaX.tomarFoto();
motorolaX.grabarCelular();
motorolaX.reiniciarCelular();
motorolaX.slowMotion();
motorolaX.reconocimientoFacial();

samsungGalaxy.infoAltagamma();
samsungGalaxy.prenderCelular();
samsungGalaxy.tomarFoto();
samsungGalaxy.grabarCelular();
samsungGalaxy.reiniciarCelular();
samsungGalaxy.slowMotion();
samsungGalaxy.reconocimientoFacial();

xiaomiRedmy.infoAltagamma();

xiaomiRedmy.prenderCelular();
xiaomiRedmy.tomarFoto();
xiaomiRedmy.grabarCelular();
xiaomiRedmy.reiniciarCelular();
xiaomiRedmy.slowMotion();
xiaomiRedmy.reconocimientoFacial();
