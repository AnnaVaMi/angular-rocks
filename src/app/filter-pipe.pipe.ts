import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  // Filtrar las bandas por nombre
  transform(bands: any, input: any): any {
    if (input) {
      return bands.filter(band => band.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } 
    else {
      return bands;
    }
  }
}