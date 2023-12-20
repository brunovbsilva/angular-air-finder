import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { ErrorMessage } from '../models/errors.model';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('open and close', () => {
    let showEventSpy: jasmine.Spy;

    beforeEach(() => showEventSpy = spyOn(component.showEvent, 'next'));

    it('should show message with success message', () => {
      // Arrange
      const model: ErrorMessage = {
        message: 'mocked message',
        success: true
      }

      // Act
      component.open(model);

      // Assert
      expect(component.message).toBe(model.message);
      expect(component.success).toBe(model.success);
      expect(showEventSpy).toHaveBeenCalledWith(true);
    });

    it('should show message with error message', () => {
      // Arrange
      const model: ErrorMessage = {
        message: 'mocked message',
        success: false
      }

      // Act
      component.open(model);

      // Assert
      expect(component.message).toBe(model.message);
      expect(component.success).toBe(model.success);
      expect(showEventSpy).toHaveBeenCalledWith(true);
    });

    it('should close message', () => {
      // Act
      component.close();

      // Assert
      expect(showEventSpy).toHaveBeenCalledWith(false);
    });
  });
});
