import { Pipe, PipeTransform } from '@angular/core';
import { MatOption } from '@angular/material/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: MatOption[], search: string): MatOption[] {
    return value.filter((v) =>
      v.value.toString().toLowerCase().includes(search.toLowerCase()) ||
      v.viewValue.toLowerCase().includes(search.toLowerCase())
    );
  }
}
