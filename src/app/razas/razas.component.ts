import { Component, Input, OnInit } from '@angular/core';
import { RazasService } from '../servicios/razas.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {
  @Input("filtro") filtroListado:any;

  razas:any;
  public page!:number;

  constructor(private servicioRazas:RazasService) { 
    this.listarRazas();
  }

  ngOnInit(): void {
  }

  listarRazas():void{
    this.servicioRazas.listarRazas().subscribe({
      next:(r) => this.razas=r,
      error:(e) => console.log(JSON.stringify(e))
    });
    console.log("haciendo el listarRazas desde componente");
  }

}
