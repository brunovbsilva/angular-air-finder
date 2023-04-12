import { Pipe, PipeTransform } from '@angular/core';
import { SelectModel } from '../models/select.model';

@Pipe({
  name: 'itemsInView',
  pure: false
})
export class ItemsInViewPipe implements PipeTransform {
  transform(value: SelectModel[], max: number = 999): SelectModel[] {
    const selected = value.filter((v) => 
      v.selected
    ).filter((v, index) => 
      index < max
    );

    return selected;
  }
}
