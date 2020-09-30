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
  client : Persona = new Persona('asd123','pepe', 'argento', '341-000001',this.adress, 'pepeargento@gmail.com', 'activo')

  constructor() { 
    this.clients.push(this.client)
  }

  ngOnInit(): void {
  }

}
