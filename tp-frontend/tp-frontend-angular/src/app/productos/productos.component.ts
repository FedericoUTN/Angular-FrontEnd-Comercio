import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Precio } from 'src/classes/Precio';
import { Producto } from 'src/classes/Producto';
import Swal from 'sweetalert2';
import { ProductoService } from '../services/producto.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  TipoProducto = new FormControl('')

  products : Producto[] = []
  listType : string[] = []

cargando = false
p = new Precio(50000)
  product : Producto = new Producto('rtx 2060', 'placa de video serie RTX20xx'
  ,5,50000,'placa de video')

  constructor(private productService : ProductoService) { }

  ngOnInit(): void {
    this.cargando = true

   

    this.productService.getAllProducts()
    .subscribe(resp =>{
      this.products = resp
      this.products.forEach(res => {
        if (!this.listType.includes(res.tipoProducto)){
          this.listType.push(res.tipoProducto)
        }
      })
      this.cargando = false
    })

    console.log(this.listType);
    
      
      
    
  }
  borrarProducto(producto : Producto, i : number){
Swal.fire({
  title: 'Esta seguro ?',
  text: `Esta seguro que desea borrar a ${producto.nombre} ?`,
  icon: 'question',
  showConfirmButton: true,
  showCancelButton: true
}).then(resp => {
  if (resp.value){
    this.products.splice(i,1) //borro el registro visual que borre de la bd
    this.productService.deleteProduct(producto.id).subscribe()
  }
})
  }
  
  
  //funciona, devuelve un array con los tipos en el input
  findByTipo(type : string){
    
    console.log(type);
    
    this.productService.getByType(type).subscribe(res =>{
      this.products = res
    })
    

  }



}
