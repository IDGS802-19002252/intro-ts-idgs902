interface Persona1 {
  nombre: string;
  edad: number;
  grupo: string;
  materias: string[];
  inscrito?: string;
  activo?: string;
}

const alumno2: Persona1 = {
  nombre: "Juan",
  edad: 28,
  grupo: "IDGS902",
  materias: ["Inglés", "Desarrollo Web"]
}

alumno.inscrito = "asies"
alumno.activo = "ne"

function Suma(a:number, b:number) {
  return a + b
}

const sumaFlecha2 = (a: number, b: number) => a + b;

function multiplicar(num1: number, numero2?: number, base: number = 3): number {
  return num1 * base
}

interface Persona {
  nombre: string;
  edad: number;
  grupo: () => void;
}

function UTL2(alumno: Persona, cuatri: number): void {
  alumno.edad = 23
  console.log(alumno)
}

const NuevoAlumno2: Persona = {
  nombre: "Juan",
  edad: 28,
  grupo() {
      console.log('IDGS902', this.edad)
  }
}

UTL(NuevoAlumno, 4)

// funcin anónima
const funcSumar = (n1: number, n2: number): number => n1 + n2

console.log(funcSumar(2, 3));

function calcular(n1: number, n2: number, n3?: number) {
  if (n3) {
    return n1+n2+n3
  } else {
    return n1 + n2
  }
}

function calcular2(...valores: number[]) {
  let suma = 0
  for (let index = 0; index < valores.length; index++) {
    suma += valores[index]
  }
  return suma
}

console.log(calcular2(3,2,5));
console.log(calcular2(3,2));
