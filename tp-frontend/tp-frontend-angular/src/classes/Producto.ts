import { Precio } from './Precio';
import { TipoProducto } from './TipoProducto';


export class Producto {
    id : string
    constructor(
        public nombre : string, 
        public detalle : string,
        public stock : number, 
        public precio : number,     //cambiar a precio : Precio luego
        public tipoProducto : string  //cambiar a tipoProducto : TipoProducto luego
        ) {
        
    }
}