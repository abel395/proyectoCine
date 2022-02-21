import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-busqueda',
  templateUrl: './componente-busqueda.component.html',
  styleUrls: ['./componente-busqueda.component.css']
})
export class ComponenteBusquedaComponent implements OnInit {


  filtroBusqueda:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
