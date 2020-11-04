import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/classes/Producto';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'https://tp-angular-45a70.firebaseio.com'
  constructor(private http : HttpClient) { }
  
  getAllProducts(){
    return this.http.get(`${ this.url }/productos.json`)
    .pipe(
      map(this.createArray)
    )
  }
  
  private createArray(productObj : object){
    const products : Producto[] = []
    if (productObj === null){return []}

    Object.keys (productObj).forEach( key => {
      const prod : Producto = productObj[key]
      prod.id = key

      products.push(prod)
    })
    return products
  }

  createProduct(product : Producto){
    return this.http.post(`${ this.url }/productos.json`, product)
    .pipe(
      map((resp:any) => {
        product.id = resp.name
        return product
      })
    )
  }

  updateProduct(product : Producto){

    const productTemp = {
      ...product
    }
    delete productTemp.id //asi evito enviar el id
    return this.http.put(`${ this.url }/productos/${product.id}.json`, productTemp)
    
  }

  

  getProduct(id : string){
    return this.http.get(`${ this.url }/productos/${id}.json`)
  }

  deleteProduct(id : string){
    return this.http.delete(`${ this.url }/productos/${id}.json`)
  }

  getByType(type : string){
    return this.getAllProducts().pipe(
      map(res => res = res.filter(prod => prod.tipoProducto == type))
    )
    
    
  }
}
