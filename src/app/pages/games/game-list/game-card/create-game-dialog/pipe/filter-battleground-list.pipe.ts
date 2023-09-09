import { Pipe, PipeTransform } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Pipe({
  name: 'filterBattlegroundList'
})
export class FilterBattlegroundListPipe implements PipeTransform {

  transform(value: Battleground[], search: string): Battleground[] {
    return value.filter(x => x.address.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.cep.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.country.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.imageUrl.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.number.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.state.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

}
