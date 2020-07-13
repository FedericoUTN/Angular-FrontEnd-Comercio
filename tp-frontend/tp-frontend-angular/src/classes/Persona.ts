import { Direccion } from '../classes/Direccion';

export class Persona {
    constructor(public nombre : string, public apellido : string, 
        public telefono : string, public direccion : Direccion,
        public email : string, public estado : string
         ) { 
        
    }
}