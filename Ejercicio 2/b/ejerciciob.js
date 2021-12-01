/** 
 * Consigna:
 * 
 * crear un minisistema que permita registrar los alumnos que estan presentes o ausentes con sus letras:
 * 
 *- pasados los 30 dias, mostrar la situacion final de todos los alumnos. Total de ausentes y presentes
 *- se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas, aclarar que esta reprobado
 * 
**/

let alumnos1 = [];
let alumnos2 = [];
let alumnos3 = [];
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
const verificador1 = "a";
let diasAlumno1 = 0;
let diasAlumno2 = 0;
let diasAlumno3 = 0;
let suma1 = 0;
let suma2 = 0;
let suma3 = 0;
let presente = 0;

let dia = 1;

function registro() {

    while (contador1 != 30) {
        let inasistencia = prompt(`ingresa p para presente o a para ausente del alumno 1 dia ${dia}`)
        if (verificador1 == inasistencia) {
            alumnos1[diasAlumno1] = 1
            diasAlumno1 = diasAlumno1 + 1
        }
        else {
            alumnos1[diasAlumno1] = 0;
            diasAlumno1 = diasAlumno1 + 1
        }
        contador1 = contador1 + 1
        dia = dia + 1
    }

    dia = 1;

    while (contador2 != 30) {
        let inasistencia = prompt(`ingresa p para presente o a para ausente del alumno 2 dia ${dia}`)
        if (verificador1 == inasistencia) {
            alumnos2[diasAlumno2] = 1;
            diasAlumno2 = diasAlumno2 + 1
        }
        else {
            alumnos2[diasAlumno2] = 0;
            diasAlumno2 = diasAlumno2 + 1
        }
        contador2 = contador2 + 1
        dia = dia + 1
    }

    dia = 1;

    while (contador3 != 30) {

        let inasistencia = prompt(`ingresa p para presente o a para ausente del alumno 3 dia ${dia}`)

        if (verificador1 == inasistencia) {
            alumnos3[diasAlumno3] = 1;
            diasAlumno3 = diasAlumno3 + 1

        }
        else {
            alumnos3[diasAlumno3] = 0;
            diasAlumno3 = diasAlumno3 + 1
        }
        contador3 = contador3 + 1
        dia = dia + 1
    }

    for (pasarLista of alumnos1) {
        suma1 = suma1 + pasarLista
    }
    
    presente = 30 - suma1;
    document.write(
        `La cantidad de asistencias del alumno1 es: ${presente}  <br>
         La cantidad de inasistencias del alumno1 es: ${suma1}  <br>`)
    if (suma1 > 3) {
        document.write("el Alumno1 se encuentra reprobado por superar el 10% de inasistencias permitidas<br>")
    }

    for (pasarLista of alumnos2) {
        suma2 = suma2 + pasarLista
    }
    presente = 30 - suma2;
    document.write(
        `La cantidad de asistencias del alumno2 es: ${presente}  <br>
         La cantidad de inasistencias del alumno2 es: ${suma2}  <br>`)
    if (suma2 > 3) {
        document.write("el Alumno2 se encuentra reprobado por superar el 10% de inasistencias permitidas<br>")
    }

    for (pasarLista of alumnos3) {
        suma3 = suma3 + pasarLista
    }
    presente = 30 - suma3;
    document.write(
        `La cantidad de asistencias del alumno3 es: ${presente}  <br>
         La cantidad de inasistencias del alumno3 es: ${suma3}  <br>`)
    if (suma3 > 3) {
        document.write("el Alumno3 se encuentra reprobado por superar el 10% de inasistencias permitidas<br>")
    }
}
registro();
