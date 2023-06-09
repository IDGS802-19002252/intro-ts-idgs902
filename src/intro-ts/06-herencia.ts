class Persona5 {

  constructor(
    protected nombre: string,
    protected edad: number,
  ) {}

  imprimir() {
    console.log(`Nombre: ${this.nombre}; Edad: ${this.edad}`);
  }
}

class Empleado extends Persona5 {
  constructor(
    private sueldo: number,
    public nom: string,
    public edad: number
  ) {
    super(nom, edad)
    this.sueldo = sueldo
  }

  imprimir() {
    super.imprimir()
    console.log(`Sueldo: ${this.sueldo}`);
  }
}