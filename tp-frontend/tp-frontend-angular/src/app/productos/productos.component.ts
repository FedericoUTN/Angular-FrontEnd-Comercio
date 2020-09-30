import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/classes/Producto';
import Swal from 'sweetalert2';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
products : Producto[] = []
cargando = false

  product : Producto = new Producto('rtx 2060', 'placa de video serie RTX20xx'
  ,5,50000,'placa de video')

  constructor(private productService : ProductoService) { }

  ngOnInit(): void {
    this.cargando = true

    this.productService.getAllProducts()
    .subscribe(resp =>{
      this.products = resp
      this.cargando = false
    })
      
    
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
  

}
