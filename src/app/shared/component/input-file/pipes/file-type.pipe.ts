import { Pipe, PipeTransform } from '@angular/core';
import { FileType } from '../enums/file-type.enum';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

  transform(values: FileType[]): string {
    let result = '';
    values.forEach((value, index) => {
      index == 0 ? result += FileType[value] : 
      index == (values.length - 1) ? result += ' ou ' + FileType[value] :
      result += ', ' + FileType[value];
    });
    return result;
  }
}
