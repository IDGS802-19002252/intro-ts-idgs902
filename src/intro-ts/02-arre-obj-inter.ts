const vector1: number[] = [9, 8, 7, 6]
vector[2] = 8
vector.push(8)
for (const elemento of vector1) {
  console.log(elemento);
}

let tem: (number|string)[] = []
tem.push('juan')
tem.push(123)


interface Alumno {
  matricula?: number,
  nombre: string,
  edad: number,
  email: string
}

const alumno1: Alumno = {
  // matricula: 1234,
  nombre: 'Juan',
  edad: 28,
  email: 'juan@juan.com'
}
