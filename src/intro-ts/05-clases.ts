class Persona2 {
  // nombre: string = 'Juan';
  // edad: number = 28;

  constructor(private nombre: string = '', private edad: number = 0) {
    // this.nombre = nombre
    // this.edad = edad
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
  }
}

const persona = new Persona2('Felipino', 22);
persona.imprimir()


class Dado {

  constructor(
    private valor: number = 0
  ) {}

  tirar() {
    this.generar()
  }

  generar() {
    this.valor = Math.floor(Math.random()*6)+1
  }

  imprimir() {
    console.log(`Valor: ${this.valor}`);
  }
}

const dado1 = new Dado()
dado1.tirar()
dado1.imprimir()


class Persona3 {

  constructor(
    private nombre: string,
    private edad: number
  ) {}

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
  }
}

const persona3 = new Persona3('Ramiro', 48)
persona3.imprimir()