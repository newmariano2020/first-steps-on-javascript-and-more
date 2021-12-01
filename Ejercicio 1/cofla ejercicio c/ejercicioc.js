/** Consigna
 *
 *  crear detector de mentiras:
 *
 *- si el sospechoso miente, dar una descarga electrica
 *- si no miente, no hacer nada
 *- si el aparato no se decide, aclarar que la pregunta debe ser mas clara
 **/

let miente = 1;
let verdad = 2;
let indeciso = 3;
let preguntaA = 'inocente';
let preguntaB = 'culpable';
let preguntaC = 'abstiene';

let acusado1 = prompt("como se declara el acusado(inocente,culpable,abstiene)");

    if (acusado1 == preguntaA) {
        document.write(`el valor devuelto es ${miente}, el acusado1 miente`)
        document.write(`<br> <br>Dar descarga electrica!`)
    }

    if (acusado1 == preguntaB) {
        document.write(`<br>el valor devuelto es ${indeciso}, la pregunta debe ser mas clara.`)
    }

    if (acusado1 == preguntaC) {
        document.write(`<br>el valor devuelto es ${verdad}, el acusado1 dice la verdad`)
    }

    if (acusado1 != preguntaA) {
        if (acusado1 != preguntaB) {
            if (acusado1 != preguntaC) {
                document.write("la respuesta debe ser mas clara y se considera en desacato<br><br>")
            }
        }
    }

let acusado2 = prompt("como se declara el acusado"(inocente,culpable,abstiene));

    if (acusado2 == preguntaA) {
        document.write(`<br>el valor devuelto es ${miente}, el acusado2 miente`)
        document.write(`Dar descarga electrica!<br><br>`)
    }

    if (acusado2 == preguntaB) {
        document.write(`<br>el valor devuelto es ${indeciso}, la pregunta debe ser mas clara.`)
    }

    if (acusado2 == preguntaC) {
        document.write(`<br>el valor devuelto es ${verdad}, el acusado2 dice la verdad`)
    }

    if (acusado2 != preguntaA) {
        if (acusado2 != preguntaB) {
            if (acusado2 != preguntaC) {
                document.write("la respuesta debe ser mas clara y se considera en desacato<br><br>")
            }
        }
    }
   
let acusado3 = prompt("como se declara el acusado"(inocente,culpable,abstiene));

    if (acusado3 == preguntaA) {
        document.write(`el valor devuelto es ${miente}, el acusado3 miente`)
        document.write(`Dar descarga electrica!<br><br>`)
    }

    if (acusado3 == preguntaB) {
        document.write(`el valor devuelto es ${indeciso}, la pregunta debe ser mas clara.`)
    }

    if (acusado3 == preguntaC) {
        document.write(`el valor devuelto es ${verdad}, el acusado3 dice la verdad`)
    }
    
    if (acusado3 != preguntaA) {
        if (acusado3 != preguntaB) {
            if (acusado3 != preguntaC) {
                document.write("la respuesta debe ser mas clara y se considera en desacato<br><br>")
            }
        }
    }
