import { Pipe, PipeTransform } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Pipe({
  name: 'address1'
})
export class Address1Pipe implements PipeTransform {

  transform(value: Battleground): string {
    return `${value.address}, n° ${value.number}`;
  }

}
