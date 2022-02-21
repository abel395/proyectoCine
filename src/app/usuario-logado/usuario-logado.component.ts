import { Component, OnInit } from '@angular/core';
import { UsuarioLogado } from '../models/UsuarioLogado';
import { UsuarioLogadoService } from '../servicios/usuario-logado.service';

@Component({
  selector: 'app-usuario-logado',
  templateUrl: './usuario-logado.component.html',
  styleUrls: ['./usuario-logado.component.css']
})
export class UsuarioLogadoComponent implements OnInit {

  usuario: UsuarioLogado;

  constructor(private usService: UsuarioLogadoService) { 
    this.usuario={id: '',nombre:'',apellido:''};
    this.obtenerUsuario();
  }

  obtenerUsuario():void{
    this.usService.obtenerUsuariosLogado().subscribe({
      next: (r) => this.usuario = r,
      error: (e) =>console.log(JSON.stringify(e))
    });
  }

  ngOnInit(): void {
  }



}
