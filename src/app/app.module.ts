import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//componentes
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { ComponenteBusquedaComponent } from './componente-busqueda/componente-busqueda.component';
import { ComponenteListadoComponent } from './componente-listado/componente-listado.component';
import { RazasComponent } from './razas/razas.component';
import { UsuarioLogadoComponent } from './usuario-logado/usuario-logado.component';
import { FiltroPeliculasPipe } from './pipes/filtro-peliculas.pipe';
import { FormsModule } from '@angular/forms';


//rutas para el header
const routes: Routes= [
  {path:'', component: ComponenteListadoComponent},
  {path:'listado', component: ComponenteListadoComponent},
  {path:'busqueda', component: ComponenteBusquedaComponent},
  {path:'**', component: ComponenteListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    ComponenteBusquedaComponent,
    ComponenteListadoComponent,
    RazasComponent,
    UsuarioLogadoComponent,
    FiltroPeliculasPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
