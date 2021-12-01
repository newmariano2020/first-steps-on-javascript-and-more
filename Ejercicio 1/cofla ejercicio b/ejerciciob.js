/** Consigna

 * 1 sinTecho va a comprar boletos de loteria pero:
 * -si alcanza para un boleto, lo compra
 * -si alcanza para dos, los compra
 * -si alcanza para tres compra  dos y regala el vuelto
 * -debe mostrarse en pantalla los boletos que compro y el vuelto

 * **/ 

let boletoLoteria = 30;

let dineroSintecho = prompt (`Buen día Sintecho, ingresa el dinero que tienes para comprar boletos de lotería, el costo del boleto es $${boletoLoteria}`);

if (dineroSintecho < boletoLoteria) {
    document.write("lo lamento, no te alcanza para un boleto de lotería")
}

if (dineroSintecho >= boletoLoteria && dineroSintecho < 60) {
    let resta = dineroSintecho - boletoLoteria
    document.write(`has comprado un boleto de lotería y tu vuelto es $${resta}.`)
}

if (dineroSintecho >= 60 && dineroSintecho < 90) {
    let resta = dineroSintecho - 60
    document.write(`has comprado dos boleto de lotería y tu vuelto es $${resta}.`)
}

if (dineroSintecho >= 90) {
    let resta = dineroSintecho - 60
    document.write(`has comprado dos boleto de lotería y has regalado tu vuelto que es $${resta}.`)
}
