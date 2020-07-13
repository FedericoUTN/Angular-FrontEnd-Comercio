export class Direccion {
    constructor(public calle : string, public numero : number,
        public codigoPostal : {ciudad : string, provincia : string}) {
        
    }
}