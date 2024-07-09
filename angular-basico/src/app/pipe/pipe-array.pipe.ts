import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArray',
  standalone: true
})
export class PipeArrayPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
        filtro = filtro.toUpperCase();
        
        return value.filter(a =>
            a.nome.toUpperCase().indexOf(filtro) >= 0
        );
    } else {
        // Quando filtro for vazio ou nulo,
        // retornamos o próprio array
        return value;
    }
}

}
