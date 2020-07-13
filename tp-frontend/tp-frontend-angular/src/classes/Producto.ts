import { Precio } from './Precio';
import { TipoProducto } from './TipoProducto';


export class Producto {
    constructor(public nombre : string, public detalle : string,
        public stock : number, public precio : Precio,
        public tipoProducto : TipoProducto) {
        
    }
}