class PilaEnteros {
  private vec: number[] = []

  insertar(x: number) {
    this.vec.push(x)
  }

  extraer() {
    if (this.vec.length > 0) {
      return this.vec.pop()
    } else {
      return null
    }
  }
}

class PilaString {
  private vec: string[] = []

  insertar(x: string) {
    this.vec.push(x)
  }

  extraer() {
    if (this.vec.length > 0) {
      return this.vec.pop()
    } else {
      return null
    }
  }
}

const pila1 = new PilaEnteros()
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());

const pila2 = new PilaString()
pila2.insertar('ola')
pila2.insertar('alo')
pila2.insertar('bai')
console.log(pila2.extraer());

// Clases genericas

class PilaGenerica<T> {
  private vec: T[] = []

  insertar(x: T) {
    this.vec.push(x)
  }

  extraer() {
    if (this.vec.length > 0) {
      return this.vec.pop()
    } else {
      return null
    }
  }
}

const pila3 = new PilaGenerica<number|boolean|string>()
pila3.insertar('ola')
pila3.insertar(23)
pila3.insertar(23.5)
pila3.insertar(true)
console.log(pila3.extraer());