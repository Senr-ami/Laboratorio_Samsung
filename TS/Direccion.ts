
// Clase y selección de tipos.
export class Direccion {
    constructor(
      public calle: string,
      public numero: number,
      public piso: number,
      public letra: string,
      public codigopostal: number,
      public poblacion: string,
      public provincia: string,
    ) {}

// Funciones para el acceso a los atributos.
    getCalle(): string{
        return this.calle;
    }
    getNumero(): number{
        return this.numero;
    }
    getPiso(): number{
        return this.piso;
    }
    getLetra(): string{
        return this.letra;
    }
    getCodigopostal(): number{
        return this.codigopostal;
    }
    getPoblacion(): string{
        return this.poblacion;
    }
    getProvincia(): string{
        return this.provincia;
    }
    
  }