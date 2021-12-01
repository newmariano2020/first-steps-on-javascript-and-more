/** 
 *- Consigna:
 *
 *  En una lista de inscripciones:
 *- crear función que al pasar de parámetro la materia devuelva:
 *- profesor asignado
 *- nombre de todos los alumnos

 *- Crear otra función que indique en cuantas clases esta el nombre del usuario,
 *- nombre de esas clases y de sus profesores
 *
 *- Crear función que consulte sl usuario:
 *- en qué materia se quiere inscribir
 *- si ya hay 20 inscriptos, negarle la inscripción
 *- si hay menos de 20, inscribirlo y agregarlo a la lista de alumnos
 *
**/
let mattersInscripcions = [
        literatureStudents = ["marto", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        mathematicsStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        ethicsStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        chemistryStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        physicsStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        botanyStudents = ["pepe", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        frenchStudents = ["pepe", "cofla", "marcos", "jesus", "emanuel", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        geographyStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        technologyStudents = ["pepe", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        historyStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        biologyStudents = ["pepe", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
        astronomyStudents = ["pepe", "cofla", "marcos", "jesus", "romualdo", "lolo", "jorge", "matias", "manuel", "cony", "raul", "esteban", "agustin", "gustavo", "gaston", "german", "nahuel", "martin", "lolo", "rulo"],
];

class matter {
        constructor(name, teacher, students) {
                this.name = name;
                this.teacher = teacher;
                this.students = students;
                this.informacion = `Class Name:${this.name}<br><br> Class Teacher:${this.teacher}<br>Class list of Students:${this.students}+ <br><br>`
                this.allstudents = mattersInscripcions;
        }
        informacionmateria = () => {
                document.write(this.informacion)
        }
        teachername = () => {
                document.write(this.teacher)
        }
        studentfinder = () => {
        }
        countInscription(student) {
                let amount = 0;
                this.allstudents.forEach(element => {
                        element.forEach(std => {
                                amount = amount + (std == student ? 1 : 0)
                        })
                });
                return amount;
        }
}

const literatures = new matter("Clase de Literatura", "Profesor Godoy", literatureStudents);
const mathematicss = new matter("Clase de Matematica", "Profesor Ayala  ", mathematicsStudents);
const ethicss = new matter(" Clase de etica", "Profesor Godoy  ", ethicsStudents);
const chemistrys = new matter(" Clase de Quimica", "Profesor Fernandez ", chemistryStudents);
const physicss = new matter(" Clase de Fisica", "  Profesor Gonzalez ", physicsStudents);
const botanys = new matter("Clase de Botanica", "  Profesor Quintana ", botanyStudents);
const frenchs = new matter("Clase de Frances", " Profesor Pereyra ", frenchStudents);
const geographys = new matter("Clase de Geografia", "Profesor Riorda ", geographyStudents);
const technologys = new matter("Clase de Tecnologia", "Profesor Rueda ", technologyStudents);
const historys = new matter(" Clase de Historia", "Profesor Rolon ", historyStudents);
const biologys = new matter(" Clase de Biologia", " Profesor Quinteros ", biologyStudents);
const astronomys = new matter(" Clase de Astronomia", " Profesor Martinez ", astronomyStudents);

search = () => {
        let inscription = prompt("ingresa tu nombre para que te indiquemos en que cuantas materias te has inscripto, cuales son y que profesores tienen asignado")
        let amount = 0;
        let results = literatures.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${literatures.name} y tu profesor asignado es ${literatures.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = mathematicss.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${mathematicss.name} y tu profesor asignado es ${mathematicss.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = ethicss.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${ethicss.name} y tu profesor asignado es ${ethicss.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = chemistrys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${chemistrys.name} y tu profesor asignado es ${chemistrys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = physicss.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${physicss.name} y tu profesor asignado es ${physicss.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = botanys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${botanys.name} y tu profesor asignado es ${botanys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = frenchs.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${frenchs.name} y tu profesor asignado es ${frenchs.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = geographys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${geographys.name} y tu profesor asignado es ${geographys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = technologys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${technologys.name} y tu profesor asignado es ${technologys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = historys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${historys.name} y tu profesor asignado es ${historys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = biologys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${biologys.name} y tu profesor asignado es ${biologys.teacher} <br> <br>`);
                amount = amount + 1
        }

        results = astronomys.students.includes(inscription);

        if (results) {
                document.write(`Estas inscripto en la materia ${astronomys.name} y tu profesor asignado es ${astronomys.teacher} <br> <br>`);
                amount = amount + 1
        }

        document.write(`Estas inscripto en ${amount} materias`)
        document.write(`Estas inscripto en ${astronomys.countInscription(inscription)} materias`)
}
insertStudents = (classname, newname) => {

        if (classname == "Clase de Literatura") {
                let amount3 = literatureStudents.length
                if (amount3 < 19 || amount3 == 19) {
                        literatureStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Matematica") {
                let amount3 = mathematicsStudents.length
                if (amount3 < 19 || amount3 == 19) {
                        mathematicsStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de etica") {
                let amount3 = ethicsStudents.length
                if (amount3 <= 19) {
                        ethicsStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Quimica") {
                let amount3 = chemistryStudents.length
                if (amount3 <= 19) {
                        chemistryStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Fisica") {
                let amount3 = physicsStudents.length
                if (amount3 <= 19) {
                        physicsStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Botanica") {
                let amount3 = botanyStudents.length
                if (amount3 <= 19) {
                        botanyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Frances") {
                let amount3 = frenchStudents.length
                if (amount3 <= 19) {
                        frenchStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Geografia") {
                let amount3 = geographyStudents.length
                if (amount3 <= 19) {
                        geographyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Tecnologia") {
                let amount3 = technologyStudents.length
                if (amount3 <= 19) {
                        technologyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }
                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Historia") {
                let amount3 = historyStudents.length
                if (amount3 <= 19) {
                        historyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Biologia") {
                let amount3 = biologyStudents.length
                if (amount3 <= 19) {
                        biologyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

        if (classname == "Clase de Astronomia") {
                let amount3 = astronomyStudents.length
                if (amount3 <= 19) {
                        astronomyStudents.push(newname)
                        document.write(`Has logrado inscribirte en ${classname} <br> <br>`)
                }

                else document.write("el cupo superó los 20 inscriptos")
        }

}

let newStudent = prompt("Ingresa la materia a la cual te deseas inscribir, ej. Clase de Literatura o Clase de Matematica")
let nameStudent = prompt("Ingresa tu nombre para inscribirte")
insertStudents(newStudent, nameStudent)
search()

