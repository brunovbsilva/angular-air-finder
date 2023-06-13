import { Pipe, PipeTransform } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Pipe({
  name: 'filterBattlegroundList'
})
export class FilterBattlegroundListPipe implements PipeTransform {

  transform(value: Battleground[], filter: string): Battleground[] {
    return value.filter(v => v.address.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        v.cep.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        v.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        v.country.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        v.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        v.number.toString().includes(filter.toLocaleLowerCase()) ||
        v.state.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

}
