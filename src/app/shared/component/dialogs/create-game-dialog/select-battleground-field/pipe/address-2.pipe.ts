import { Pipe, PipeTransform } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Pipe({
  name: 'address2'
})
export class Address2Pipe implements PipeTransform {

  transform(value: Battleground): string {
    return `${value.city}, ${value.state}`;
  }

}
