import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileComponent } from './file.component';
import { TooltipDirectiveSpec } from 'src/app/core/mock/tooltip.directive.spec';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FileComponent,
        TooltipDirectiveSpec
      ],
      imports: [
      ],
      providers: [

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onRemove event', () => {
    // Arrange
    const event = new Event('click');
    const spyEmit = spyOn(component.onRemove, 'emit');
    // Act
    component.removeFile(event);

    // Assert
    expect(spyEmit).toHaveBeenCalledWith(component.file);
  });
});
