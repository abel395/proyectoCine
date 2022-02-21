import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioLogado } from '../models/UsuarioLogado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  constructor(private httpClient:HttpClient) { }

  obtenerUsuariosLogado():Observable<UsuarioLogado>{
    console.log("usuario servicio");
    return this.httpClient.get<UsuarioLogado>("http://localhost:3000/usarioLogado/1");
    
  }
}
