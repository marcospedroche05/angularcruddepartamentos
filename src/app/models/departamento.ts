export class Departamento {
    public numero: number;
    public nombre: string;
    public localidad: string;

    constructor(numero: number, nombre: string, localidad: string){
        this.numero = numero,
        this.nombre = nombre,
        this.localidad = localidad
    }
}