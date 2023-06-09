const mascotas: (string|number|boolean)[] = ['gato', 'perro', 100, true]
const nombres: string[] = ['Juan', 'Pedro', 'Mario']

interface Persona1 {
    nombre: string;
    edad: number;
    grupo: string;
    materias: string[];
    inscrito?: string;
    activo?: string;
}

const alumno: Persona1 = {
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

const sumaFlecha = (a: number, b: number) => a + b;

function multiplicar(num1: number, numero2?: number, base: number = 3): number {
    return num1 * base
}

interface Persona {
    nombre: string;
    edad: number;
    grupo: () => void;
}

function UTL(alumno: Persona, cuatri: number): void {
    alumno.edad = 23
    console.log(alumno)
}

const NuevoAlumno: Persona = {
    nombre: "Juan",
    edad: 28,
    grupo() {
        console.log('IDGS902', this.edad)
    }
}

UTL(NuevoAlumno, 4)

const vector: number[] = [1, 2, 3]
vector[2] = 8
vector.push(8)
for (const elemento of vector) {
  console.log(elemento);
}

console.log(vector);
