import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/classes/Producto';
import { ProductoService } from '../services/producto.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
  products : Producto[] = []
  constructor(private productService : ProductoService) { }

  

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(resp =>{
      this.products = resp
      
    })
  }

  

}


