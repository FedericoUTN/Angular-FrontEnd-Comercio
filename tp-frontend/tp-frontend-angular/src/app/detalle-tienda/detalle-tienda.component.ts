import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Precio } from 'src/classes/Precio';

import { Producto } from 'src/classes/Producto';


import { ProductoService } from '../services/producto.service';
import { rxTest } from '../tienda/rxjsTest';


@Component({
  selector: 'app-detalle-tienda',
  templateUrl: './detalle-tienda.component.html',
  styleUrls: ['./detalle-tienda.component.css']
})
export class DetalleTiendaComponent implements OnInit {
  subtotal : number = 0
  p = new Precio(1)
  producto = new Producto('asd', 'asd', 1, 1, '123')
  stockControl = new FormControl(1,[Validators.required, Validators.max(this.producto.stock), Validators.min(1)])

  constructor(private producService : ProductoService,
    private route : ActivatedRoute) {
      this.subtotal
     }
     rx = new rxTest()

     observer = {
       next: val => console.log('es ', val),
       complete: () => console.log('completo!')
     }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== 'new'){
      this.producService.getProduct(id)
      .subscribe((resp : Producto) => {
        this.producto = resp
        this.producto.id = id
        

      })
    }
    console.log(this.producto);
  

  //const subs = this.rx.interval$.subscribe(this.observer)   cogido de test, ignorar

  
  }

  

 
}
