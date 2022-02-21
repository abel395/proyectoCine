import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPeliculas'
})
export class FiltroPeliculasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg ===undefined){
      return value;
    }

    const resultPeliculas = [];
    for (const peli of value) {
      if(peli.weight.metric.indexOf(arg)>-1 && peli.weight.metric.split("-")[1]<=arg){
        resultPeliculas.push(peli);
      }
      
    }
    return resultPeliculas;
  }
}
