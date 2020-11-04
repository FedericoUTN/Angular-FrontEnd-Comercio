export class Direccion {
    constructor(
        public calle : string, 
        public numero : number,
        public codigoPostal : {ciudad : string, provincia : string}) {
        
    }
    getData(){
        return `${this.calle} ${this.numero} - ${this.codigoPostal.provincia}, ${this.codigoPostal.ciudad}`
    }
}