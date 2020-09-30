import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  {path: 'productos', component:ProductosComponent},
  {path: 'producto/:id', component:ProductoComponent},
  //{path: 'producto', component:ProductoComponent},
  {path: '**', pathMatch:'full', redirectTo:'productos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
