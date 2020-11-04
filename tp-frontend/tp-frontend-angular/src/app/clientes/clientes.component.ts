import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/classes/Direccion';
import { Persona } from 'src/classes/Persona';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clients : Persona[] = []
  adress = new Direccion('pellegrini', 2205, { ciudad : 'rosario', provincia : 'santa fe'})
  adress2 = new Direccion('Silicon Valley', 1000, { ciudad : 'San Francisco', provincia : 'California'})
  client : Persona = new Persona('asd123','pepe', 'argento', '341-000001',this.adress, 'pepeargento@gmail.com', 'activo')
  client2 : Persona = new Persona('qwe321','Elon', 'Musk', '143-000001',this.adress2, '100%trueNoFakeElonMusk@gmail.com', 'inactivo')

  constructor() { 
    this.clients.push(this.client)
    this.clients.push(this.client2)
  }

  ngOnInit(): void {
  }

}
