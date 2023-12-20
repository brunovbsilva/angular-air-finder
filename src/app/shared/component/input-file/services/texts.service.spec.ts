import { FileType } from '../enums/file-type.enum';
import { TextsModel } from '../models/texts/texts.model';
import { FileTypePipe } from '../pipes/file-type.pipe';
import { TextsService } from './texts.service';

describe('TextsService', () => {
  let service: TextsService;

  const maxSize: number = 15;
  const allowedTypes: FileType[] = [FileType.PDF, FileType.JPEG, FileType.PNG];
  const fileTypePipe: FileTypePipe = new FileTypePipe();

  beforeEach(() => {
    service = new TextsService(fileTypePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAsyncTexts()', () => {
    // Act
    const result = service.getAsyncTexts();

    // Assert
    expect(result).not.toBeUndefined();
  });

  it('should getText()', () => {
    // Act
    const result = service.getText(maxSize, allowedTypes);

    // Assert
    expect(result).not.toBeUndefined();
  });

  it('should get empty when the month is undefined', () => {
    // Act
    const reference = service.getText(maxSize, allowedTypes);
    const result = service.getReferenceIfTextsNotExists();

    // Assert
    expect(result).toEqual(reference);
  });

});
