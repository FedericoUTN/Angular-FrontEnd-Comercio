import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/classes/Producto';
import { ProductoService } from '../services/producto.service';
import  Swal  from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  producto = new Producto('asd', 'asd', 1, 1, '123')

  idProducto = new FormControl('')

  newProduct = new FormGroup({
      productId : new FormControl(''),
      productName : new FormControl(''),
      productDetail : new FormControl(''),
      productStock : new FormControl(''),
      productPrice : new FormControl(''),
      productType : new FormControl('')
  })
  constructor(private producService : ProductoService,
    private route : ActivatedRoute) { }


  buscarProducto(){ //busca producto por id

  }
  onSubmit(){   //para crear o modificar productos
   Swal.fire({
     title: 'Espere',
     text:  'Guardando informacion',
     icon:  'info',
     allowOutsideClick: false
  });
  Swal.showLoading()

  let petition : Observable<any>
  if(this.producto.id){
    this.fillProduct()
     petition = this.producService.updateProduct(this.producto)
     console.log('actualizado')
   } else {
    this.fillProduct()
    petition = this.producService.createProduct(this.producto)
    console.log('creado')

   }
   petition.subscribe(resp =>{
     Swal.fire({
       title: this.producto.nombre,
       text: 'se actualizo correctamente',
       icon: 'success'
     })
   })


   /*if(this.producto.id){
    this.fillProduct()
     this.producService.updateProduct(this.producto)
     .subscribe(resp => {
       console.log(resp)
     })
     console.log('actualizado')
   } else {
    this.fillProduct()
    this.producService.createProduct(this.producto)
    .subscribe(resp => {console.log(resp)
      this.producto = resp})

   }
    //this.producto.id = this.newProduct.get('productId').value
    */
    

  }
  reset(){
    this.newProduct.reset()
  }
  fillProduct(){
    this.producto.nombre = this.newProduct.get('productName').value
    this.producto.detalle = this.newProduct.get('productDetail').value
    this.producto.stock = this.newProduct.get('productStock').value
    this.producto.precio = this.newProduct.get('productPrice').value
    this.producto.tipoProducto = this.newProduct.get('productType').value
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
    
  }

}
//this.idProducto.setValue('')    para setear valor al form
