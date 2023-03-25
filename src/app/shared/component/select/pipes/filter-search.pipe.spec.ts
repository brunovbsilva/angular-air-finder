import { SelectModel } from '../models/select.model';
import { FilterSearchPipe } from './filter-search.pipe';

describe('FilterSearchPipe', () => {

  it('create an instance', () => {
    const pipe = new FilterSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all results', () => {

    // Arrange
    const pipe = new FilterSearchPipe();
    var value: SelectModel[] = [
      {
        value: 1,
        name: 'description'
      }
    ]
    var search: string = '';

    // Act
    var result = pipe.transform(value, search)

    // Assert    
    expect(result.length).toEqual(value.length);

  });

  it('should return no results', () => {
    // Arrange
    const pipe = new FilterSearchPipe();
    var value: SelectModel[] = [
      {
        value: 1,
        name: 'description'
      }
    ]
    var search: string = 'teste';

    // Act
    var result = pipe.transform(value, search)

    // Assert    
    expect(result.length).toEqual(0);
  });

});
