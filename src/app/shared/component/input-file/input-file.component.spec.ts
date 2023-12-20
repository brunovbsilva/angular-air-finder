import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InputFileComponent } from './input-file.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextsModel } from './models/texts/texts.model';
import { FileTypePipe } from './pipes/file-type.pipe';
import { FileType } from './enums/file-type.enum';
import { FileComponentSpec } from 'src/app/core/mock/components/input-file/file.component.spec';
import { SearchFileButtonComponentSpec } from 'src/app/core/mock/components/input-file/search-file-button.component.spec';
import { MessageComponentSpec } from 'src/app/core/mock/components/input-file/message.component.spec';

class MockFile {
  static getFile(name: string, size: number, type: string): File {
    return {
      name: name,
      size: size,
      type: type
    } as File
  }
}

describe('InputFileComponent', () => {
  let component: InputFileComponent;
  let fixture  : ComponentFixture<InputFileComponent>;

  const texts: TextsModel = {
    labels: {
      title: 'Anexe aqui seu(s) documento(s) em PNG ou JPEG. Tamanho máximo permitido por chamado é de 15 MB.',
      searchFile: 'Procurar arquivo',
      dragAndDrop: 'Arraste e solte aqui seu(s) documento(s)'
    },
    messages: {
      success: 'Arquivo(s) anexado com sucesso!',
      invalidFile: 'Arquivo(s) inválido(s)',
      uploadError: 'Erro no upload',
      maxSizeError: 'Tamanho do arquivo excede o permitido',
      maxLengthError: 'Quantidade máxima de arquivos atingida'
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InputFileComponent,
        FileComponentSpec,
        SearchFileButtonComponentSpec,
        MessageComponentSpec
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        FileTypePipe,
      ]
    })
      .compileComponents();

    fixture           = TestBed.createComponent(InputFileComponent);
    component         = fixture.componentInstance;
    component.name    = 'files';
    component.maxSize = 15;
    component.texts   = texts;
    component.name    = 'files';
    component.form    = new FormGroup({
      files: new FormControl()
    });
    component.allowedTypes = [FileType.PNG, FileType.JPEG];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('configuration', () => {
    beforeEach(() => {
      fixture.detectChanges();
    })
    it('should configure max length above 10 to be 10', fakeAsync(() => {
      // Act
      component.maxLength = 11;
      tick(10);

      // Assert
      expect(component.maxLength).toBe(10);
    }));

    it('should configure max length negative to be 1', fakeAsync(() => {
      // Act
      component.maxLength = -1;
      tick(10);

      // Assert
      expect(component.maxLength).toBe(1);
    }));

    it('should configure max length between 1 and 10', fakeAsync(() => {
      // Act
      component.maxLength = 5;
      tick(10);

      // Assert
      expect(component.maxLength).toBe(5);
    }));

    it('should configure allowed types', fakeAsync(() => {
      // Act
      component.allowedTypes = [FileType.PNG, FileType.JPEG, FileType.PDF];
      tick(10);

      // Assert
      expect(component._types).toEqual(['image/png', 'image/jpeg', 'application/pdf']);
    }));
  });

  describe('form', () => {
    it('should emit empty array when reseted', () => {
      // Arrange
      fixture.detectChanges();
      const files: File[] = [];
      component.form.get(component.name)?.valueChanges.subscribe((value) => {
        // Assert
        expect(value).toEqual(null);
        expect(component._files).toEqual(files);
      });

      // Act
      component.form.reset();
    });

    describe('check required state', () => {
      it('should add required validator when is required', () => {
        // Arrange
        component.isRequired = true;

        // Act
        fixture.detectChanges();

        // Assert
        expect(component.form.get(component.name)?.hasValidator(Validators.required)).toBeTruthy();
      });

      it('should remove required validator when is not required', () => {
        // Arrange
        component.isRequired = false;

        // Act
        fixture.detectChanges();

        // Assert
        expect(component.form.get(component.name)?.hasValidator(Validators.required)).toBeFalsy();
      });
    });
  });

  describe('on file changes', () => {
    let event: { target: { files: jasmine.SpyObj<FileList> } };
    const messageMock = {
      open : jasmine.createSpy('open'),
      close: jasmine.createSpy('close')
    };

    beforeEach(() => {
      event = {
        target: {
          files: jasmine.createSpyObj<FileList>(['item'])
        }
      };
      component.message = messageMock as any;
    })

    it('should upload one file', fakeAsync(() => {
      // Arrange
      const mockedFile = MockFile.getFile('file.png', 1024, 'image/png');
      Object.defineProperty(event.target.files, 'length', { value: 1 });
      event.target.files.item.and.returnValue(mockedFile);

      // Act
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual([mockedFile]);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));

    it('should upload multiple files', fakeAsync(() => {
      // Arrange
      const mockedFiles = [
        MockFile.getFile('file.png', 1024, 'image/png'),
        MockFile.getFile('file.jpeg', 1024, 'image/jpeg')
      ];
      Object.defineProperty(event.target.files, 'length', { value: 2 });
      event.target.files.item.and.returnValues(mockedFiles[0], mockedFiles[1]);

      // Act
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual(mockedFiles);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));

    it('should not upload files when max length is reached', fakeAsync(() => {
      // Arrange
      const mockedFiles = [
        MockFile.getFile('file1.png', 1024, 'image/png'),
        MockFile.getFile('file2.png', 1024, 'image/png'),
        MockFile.getFile('file3.png', 1024, 'image/png')
      ];
      Object.defineProperty(event.target.files, 'length', { value: 3 });
      event.target.files.item.and.returnValues(mockedFiles[0], mockedFiles[1], mockedFiles[2]);

      // Act
      component.maxLength = 2;
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual([mockedFiles[0], mockedFiles[1]]);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));

    it('should not upload files when max size is reached', fakeAsync(() => {
      // Arrange
      const mockedFiles = MockFile.getFile('file1.png', 1024 * 1024 * 20, 'image/png');
      Object.defineProperty(event.target.files, 'length', { value: 1 });
      event.target.files.item.and.returnValue(mockedFiles);

      // Act
      component.maxSize = 10;
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual([]);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));

    it('should not upload files when type is not allowed', fakeAsync(() => {
      // Arrange
      const mockedFiles = MockFile.getFile('file1.svg', 1024, 'image/svg+xml');
      Object.defineProperty(event.target.files, 'length', { value: 1 });
      event.target.files.item.and.returnValue(mockedFiles);

      // Act
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual([]);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));

    it('should not upload files when name already exists', fakeAsync(() => {
      // Arrange
      const mockedFiles = [
        MockFile.getFile('file1.png', 1024, 'image/png'),
        MockFile.getFile('file1.png', 2048, 'image/png')
      ];
      Object.defineProperty(event.target.files, 'length', { value: 2 });
      event.target.files.item.and.returnValues(mockedFiles[0], mockedFiles[1]);

      // Act
      component.onFileChange(event as any);
      tick(component.messageTimeout + 1);

      // Assert
      expect(component._files).toEqual([mockedFiles[0]]);
      expect(component.message.open).toHaveBeenCalled();
      expect(component.message.close).toHaveBeenCalled();
    }));
  });

  describe('dragonver', () => {
    it('should set dragover to true', () => {
      // Act
      component.setDragover(true);

      // Assert
      expect(component._isDragover).toBeTruthy();
    });

    it('should set dragover to false', () => {
      // Act
      component.setDragover(false);

      // Assert
      expect(component._isDragover).toBeFalsy();
    });
  });

  describe('remove file', () => {
    it('should remove file', () => {
      // Arrange
      const mockedFiles = [
        MockFile.getFile('file1.png', 1024, 'image/png'),
        MockFile.getFile('file2.png', 1024, 'image/png'),
        MockFile.getFile('file3.png', 1024, 'image/png')
      ];
      component._files = mockedFiles;

      // Act
      component.removeFile(mockedFiles[1]);

      // Assert
      expect(component._files).toEqual([mockedFiles[0], mockedFiles[2]]);
    });
  });

  it('should update texts on changes', () => {
    // act
    component.ngOnChanges();

    // assert
    expect(component.texts).toEqual(texts);
  })
});
