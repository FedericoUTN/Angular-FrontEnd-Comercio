import { TipoMetodoDePago } from '../classes/TipoMetodoDePago';

export class MetodoDePago{
    constructor(public numero : number, public fechaVencimiento : Date,
        public estado : string, public tipoMetodo : TipoMetodoDePago) {
        
    }
}