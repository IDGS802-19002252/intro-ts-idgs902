interface Alumno1 {
  matricula: number;
  nombre: string;
  correo: string;
  edad: number;
  grupo: Grupo;
}

interface Grupo {
  grupo: string;
  year: number;
}

const alumno3: Alumno1 = {
  matricula: 1234,
  nombre: 'Juan',
  edad: 28,
  correo: 'juan@juan.com',
  grupo: {
    grupo: 'IDGS902',
    year: 2023
  }
}

console.log(`La matricula es ${alumno3.matricula}`);
console.log(`El año del grupo es ${alumno3.grupo.year}`);


const { matricula, grupo: xx} = alumno3
const { grupo } = xx
console.log(`La matricula es ${matricula} y el grupo es ${grupo}`)

const gps: string[] = ['IDGS', 'IEVN', 'REDES']
console.log(`grupo 1: ${gps[0]}`);
console.log(`grupo 2: ${gps[1]}`);
console.log(`grupo 3: ${gps[2]}`);

const [a, b] = gps
console.log(`grupo 1: ${a}`);
