import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], texto: string=''): any {
    
    if (texto == '') {
      return array;
    }
    
    if ( !array) {
      return array;
    }

    texto = texto.toLocaleLowerCase();

    return array.filter(
        item =>item.nombre_articulo.toLowerCase().includes(texto)
    )
  }
}
