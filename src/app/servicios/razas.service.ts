import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(private httpClient: HttpClient) { 
     
  }

  listarRazas():Observable<any>{
    console.log("haciendo el listarRazas desde servicio");
    return this.httpClient.get("https://api.thedogapi.com/v1/breeds");
    
    
  }
}
