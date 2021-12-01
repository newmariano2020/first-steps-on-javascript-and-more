/** 
 * Consigna:
 * 
 * 3 chicos entran a una heladeria a comprar un helado pero: 
 * 
 * -los precios no estan visibles
 * -desean comprar el helado mas caro con el dinero que poseen
 * -cada uno tiene distintas cantidades de dinero, hay una tabla en la que podemos basarnos para ver el costo de cada helado
 * 
 * a)pedirles el monto que tienen y mostrar el helado mas caro que pueden comprar;
 * si hay 2 mostrar ambos;
 * indicar el vuelto.-
**/

let palitoDeHeladoDeAgua = 0.6;
let palitoDeHeladoDeCrema = 1;
let bombomHeladoMarcaHeladix = 1.6;
let bombonHeladoMarcaHeladovich = 1.7;
let bombonHeladoMarcaHelardo = 1.8;
let potecitoDeHeladoConConfites = 2.9;
let poteDeUnCuartokg = 2.9;
let a;

let dineroRoberto = prompt("hola Roberto, indica tu dinero");

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
   document.write("Roberto, Te alcanza para comprar un Palito de Helado de agua")
   let resta = (dineroRoberto - palitoDeHeladoDeAgua)
   document.write(`De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
   document.write("<br> Roberto, Te alcanza para comprar un Palito de crema")
   let resta = (dineroRoberto - palitoDeHeladoDeCrema)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
   document.write("<br> Roberto, Te alcanza para comprar un bombom Helado Marca Heladix")
   let resta = (dineroRoberto - bombomHeladoMarcaHeladix)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
   document.write("<br> Roberto, Te alcanza para comprar un bombon Helado Marca Heladovich       ")
   let resta = (dineroRoberto - bombonHeladoMarcaHeladovich)
   document.write(`De comprarlo tu vuelto sería ${resta}.  `)
}

if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
   document.write("<br> Roberto, Te alcanza para comprar un bombon Helado Marca Helardo       ")
   let resta = (dineroRoberto - bombonHeladoMarcaHelardo)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroRoberto >= 2.9) {
   document.write("<br> Roberto, Te alcanza para comprar un potecito De Helado Con Confites       ")
   let resta = (dineroRoberto - potecitoDeHeladoConConfites)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroRoberto >= 2.9) {
   document.write("<br> Roberto, Te alcanza para comprar un pote De Un Cuarto kg       ")
   let resta = (dineroRoberto - poteDeUnCuartokg)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

let dineroPedro = prompt("hola Pedro, indica tu dinero");

if (dineroPedro >= 0.6 && dineroPedro < 1) {
   document.write("<br> Pedro, Te alcanza para comprar un Palito de Helado de agua")
   let resta = (dineroPedro - palitoDeHeladoDeAgua)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 1 && dineroPedro < 1.6) {
   document.write("<br> Pedro, Te alcanza para comprar un Palito de crema")
   let resta = (dineroPedro - palitoDeHeladoDeCrema)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
   document.write("<br> Pedro, Te alcanza para comprar un bombom Helado Marca Heladix")
   let resta = (dineroPedro - bombomHeladoMarcaHeladix)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
   document.write("<br> Pedro, Te alcanza para comprar un bombon Helado Marca Heladovich")
   let resta = (dineroPedro - bombonHeladoMarcaHeladovich)
   document.write(`De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
   document.write("<br> Pedro, Te alcanza para comprar un bombon Helado Marca Helardo       ")
   let resta = (dineroPedro - bombonHeladoMarcaHelardo)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 2.9) {
   document.write("<br> Pedro, Te alcanza para comprar un potecito De Helado Con Confites       ")
   let resta = (dineroPedro - potecitoDeHeladoConConfites)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroPedro >= 2.9) {
   document.write("<br> Pedro, Te alcanza para comprar un pote De Un Cuarto kg       ")
   let resta = (dineroPedro - poteDeUnCuartokg)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

let dineroCofla = prompt("hola, indica tu dinero");

if (dineroCofla >= 0.6 && dineroCofla < 1) {
   document.write("<br> Cofla, Te alcanza para comprar un Palito de Helado de agua")
   let resta = (dineroCofla - palitoDeHeladoDeAgua)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroCofla >= 1 && dineroCofla < 1.6) {
   document.write("<br> Cofla,Te alcanza para comprar un Palito de crema")
   let resta = (dineroCofla - palitoDeHeladoDeCrema)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
   document.write("<br> Cofla, Te alcanza para comprar un bombom Helado Marca Heladix")
   let resta = (dineroCofla - bombomHeladoMarcaHeladix)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
   document.write("<br> Cofla, Te alcanza para comprar un bombon Helado Marca Heladovich       ")
   let resta = (dineroCofla - bombonHeladoMarcaHeladovich)
   document.write(`De comprarlo tu vuelto sería ${resta}.   `)
}

if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
   document.write("<br> Cofla, Te alcanza para comprar un bombon Helado Marca Helardo       ")
   let resta = (dineroCofla - bombonHeladoMarcaHelardo)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroCofla >= 2.9) {
   document.write("<br> Cofla, Te alcanza para comprar un potecito De Helado Con Confites       ")
   let resta = (dineroCofla - potecitoDeHeladoConConfites)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}

if (dineroCofla >= 2.9) {
   document.write("<br> Cofla, Te alcanza para comprar un pote De Un Cuarto kg       ")
   let resta = (dineroCofla - poteDeUnCuartokg)
   document.write(` De comprarlo tu vuelto sería ${resta}.`)
}