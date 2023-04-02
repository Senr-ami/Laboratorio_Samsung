
// Clase y selección de tipos.
export class Mail {
    constructor(
      public tipo: string,
      public direccion: string,
    ) {}

// Funciones para el acceso a los atributos.
    getTipo(): string{
        return this.tipo;
    }
    getDireccion(): string{
        return this.direccion;
    }
    
  }