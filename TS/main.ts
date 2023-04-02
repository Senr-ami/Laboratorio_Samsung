
// Creación del main importando las clases anteriores.

import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

// Creación direcciones
const direccion1 = new Direccion("Calle Falsa", 123, 4, "A", 65211, "Getafe", "Madrid");
const direccion2 = new Direccion("Avenida Silvestre",456,2,"B",64235,"Nerja","Málaga");
const direccion3 = new Direccion("Calle del Reposo",789,1,"C",34621,"Vícar","Almería");

// Creación teléfonos
const telefono1 = new Telefono("Trabajo", 631568932);
const telefono2 = new Telefono("Casa", 999555666);
const telefono3 = new Telefono("Casa", 956412312);
const telefono4 = new Telefono("Personal", 612564756);
const telefono5 = new Telefono("Trabajo", 956412645);
const telefono6 = new Telefono("Casa", 954564561);

// Creación mails
const mail1 = new Mail("Trabajo", "jajasaludos@gmail.com");
const mail2 = new Mail("Personal", "ajugar@games.com");
const mail3 = new Mail("Empresa", "viajes@elcorteingles.com");

// Creación personas
const Manuel = new Persona("Manuel", "Lopez Gomez", 35, "52520529Y", new Date(1987,5,9) , "Rojo","Hombre", [direccion1], [mail1], [telefono1, telefono2], "Notas de Manuel");
const María = new Persona("María", "Nieves Peralta", 44, "58489890Q", new Date(1968,6,15), "Amarillo", "Mujer", [direccion2], [mail2], [telefono3, telefono4], "Notas de María");
const Rubén = new Persona("Rubén", "Gutierrez Torres", 46, "69096946R", new Date(1964, 5, 5), "Negro", "Hombre", [direccion3], [mail3], [telefono5, telefono6], "Notas de Rubén" );

// Resultados en terminal 1.0
console.log("Información de personas:")
console.log(Manuel);
console.log(María);
console.log(Rubén);

// Búsqueda mediante DNI
const buscarDni: string = "58489890Q";
const agenda: Array<Persona> = new Array(Manuel, María, Rubén);
const editarPersona: Persona = agenda.find(persona => persona.dni === buscarDni) as Persona;

// Datos nuevos
const direccionNueva = new Direccion("Calle más falsa", 58, 6, "G", 65481,"Badalona", "Barcelona");
const mailNuevo = new Mail("Personal", "semeolvido@gmail.com");
const telefonoNuevo = new Telefono("Trabajo", 931256842);

// Añadiendo datos nuevos
editarPersona.nuevaDireccion(direccionNueva);
editarPersona.nuevoTelefono(telefonoNuevo);
editarPersona.nuevoMail(mailNuevo);

// Resultados terminal 2.0
console.log("Información de personas actualizada:")
console.log(Manuel);
console.log(María);
console.log(Rubén);

