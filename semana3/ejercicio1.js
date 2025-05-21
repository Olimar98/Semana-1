
const { ask } = require('../helpers/input');

async function main() {

    const Alumno = {
        nombre: "Diego",
        Matricula: "222-222",
        Promedio:75,
        edad:20,
        mostrar: function(){
            console.log(`Hola, yo soy ${this.nombre}, mi matricula es ${this.Matricula}, Tengo ${this.edad} años y mi promedio es de ${this.Promedio}`);
            if (this.edad >= 18){
                console.log("Puede votar");
            }else if (edad){
                console.log("No puede votar");
            }
        }
    }

    const Alumno2 = {
        nombre: "Zara",
        Matricula: "017-263",
        Promedio:60,
        edad:15,
        mostrar: function(){
            console.log(`Hola, yo soy ${this.nombre}, mi matricula es ${this.Matricula}, Tengo ${this.edad} años y mi promedio es de ${this.Promedio}`);
            if (this.edad >= 18){
                console.log("Puede votar");
            }else{
                console.log("No puede votar");
            }
        }
    }

    const Alumno3 = {
        nombre: "Oliver",
        Matricula: "098-117",
        Promedio:50,
        edad:18,
        mostrar: function(){
            console.log(`Hola, yo soy ${this.nombre}, mi matricula es ${this.Matricula}, Tengo ${this.edad} años y mi promedio es de ${this.Promedio}`);
            if (this.edad >= 18){
                console.log("Puede votar");
            }else{
                console.log("No puede votar");
            }
        }
    }

    const Alumno4 = {
        nombre: "Madai",
        Matricula: "124-598",
        Promedio:80,
        edad:23,
        mostrar: function(){
            console.log(`Hola, yo soy ${this.nombre}, mi matricula es ${this.Matricula}, Tengo ${this.edad} años y mi promedio es de ${this.Promedio}`);
            if (this.edad >= 18){
                console.log("Puede votar");
            }else {
                console.log("No puede votar");
            }
        }
    }

    const Alumnos = [Alumno,Alumno2,Alumno3,Alumno4];


    Alumno.mostrar();
    Alumno2.mostrar();
    Alumno3.mostrar();
    Alumno4.mostrar();

//     const persona = {
//         nombre:"Oliver Leví",
//         edad: 18,
//         profesion: "ser tremendo autista",
//         hobbies: ["Dibujar", "Videojuegos", "Editar"],
//         birthday: "2007-06-05",
//         saludar: function(){
//             console.log(`Hola mi nombre es $(this.nombre)`)
//         }
        
        
// }


//     console.log(persona.nombre);
//     console.log(persona.edad);
//     console.log(persona.profesion);
//     console.log(persona.hobbies);
//     console.log(persona.birthday);
//     console.log(saludar());

}

main();