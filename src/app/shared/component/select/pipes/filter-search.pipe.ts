import { Pipe, PipeTransform } from '@angular/core';
import { SelectModel } from '../models/select.model';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: SelectModel[], search: string): SelectModel[] {
    return value.filter((v) =>
        v.value.toString().toLowerCase().includes(search.toLowerCase()) ||
        v.name.toLowerCase().includes(search.toLowerCase())
      );
  }
}
