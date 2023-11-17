export class Alumno{
    constructor(
        public idAlumno: number,
        public nombre: string,
        public apellidos: string,
        public imagen: string, 
        public activo: boolean,
        public idCurso: number
    ){

    }
}