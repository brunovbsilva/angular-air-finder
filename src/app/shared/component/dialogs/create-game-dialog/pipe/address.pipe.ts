import { Pipe, PipeTransform } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Battleground): string {
    return `${value.address}, n° ${value.number}, ${value.city}, ${value.state}`;
  }

}
