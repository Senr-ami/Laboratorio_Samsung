
// Clase y selección de tipos.
export class Telefono {
    constructor(
      public tipo: string,
      public numero: number,
    ) {}

// Funciones para el acceso a los atributos.
    getTipo(): string{
        return this.tipo;
    }
    getNumero(): number{
        return this.numero;
    }
    
  }