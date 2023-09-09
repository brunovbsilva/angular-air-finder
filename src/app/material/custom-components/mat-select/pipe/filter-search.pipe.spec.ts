
import { OptionModel } from '../models/option.model';
import { FilterSearchPipe } from './filter-search.pipe';

describe('FilterSearchPipe', () => {
  // const selectModel: OptionModel[] = [
  //   {
  //     value: 1,
  //     viewValue: 'description 1',
  //   },
  //   {
  //     value: 2,
  //     viewValue: 'description 2'
  //   },
  //   {
  //     value: 3,
  //     viewValue: 'description 3'
  //   }
  // ]

  it('create an instance', () => {
    const pipe = new FilterSearchPipe();
    expect(pipe).toBeTruthy();
  });

  xit('should return all results', () => {

    // Arrange
    const pipe = new FilterSearchPipe();
    var search: string = '';

    // Act
    //var result = pipe.transform(selectModel, search)

    // Assert    
    //expect(result.length).toEqual(selectModel.length);

  });

  xit('should return no results', () => {
    // Arrange
    const pipe = new FilterSearchPipe();
    var search: string = 'teste';

    // Act
    //var result = pipe.transform(selectModel, search)

    // Assert    
    //expect(result.length).toEqual(0);
  });

});
