import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

// Clase y selección de tipos.
export class Persona {
    constructor(
      public nombre: string,
      public apellidos: string,
      public edad: number,
      public dni: string,
      public cumpleaños: Date,
      public colorFavorito: string,
      public sexo: string,
      public direcciones: Array<Direccion>,
      public mails: Array<Mail>,
      public telefonos: Array<Telefono>,
      public notas: string
    ) {}

// Funciones para el acceso a los atributos.
    getNombre(): string {
      return this.nombre;
    }
  
    getApellidos(): string {
      return this.apellidos;
    }
  
    getEdad(): number {
      return this.edad;
    }
  
    getDni(): string {
      return this.dni;
    }
  
    getCumpleaños(): Date {
      return this.cumpleaños;
    }
  
    getColorFavorito(): string {
      return this.colorFavorito;
    }
  
    getSexo(): string {
      return this.sexo;
    }
  
    getDirecciones(): Array<Direccion> {
      return this.direcciones;
    }
  
    getMails(): Array<Mail> {
      return this.mails;
    }
  
    getTelefonos(): Array<Telefono> {
      return this.telefonos;
    }
  
    getNotas(): string {
      return this.notas;
    }

    // Nuevos datos
    nuevaDireccion(direccion:Direccion){
      this.direcciones.push(direccion)
    }
    nuevoTelefono(telefono:Telefono){
      this.telefonos.push(telefono)
    }
    nuevoMail(mail:Mail){
      this.mails.push(mail)
    }
  }