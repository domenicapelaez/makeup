import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(busq: any[], letra: string=''): any {
    
    if (letra == '') {
      return busq;
    }
    
    if ( !busq) {
      return busq;
    }

    letra = letra.toLowerCase();

    return busq.filter(
        item =>item.nombre_articulo.toLowerCase().includes(letra)
    )
  }
}
