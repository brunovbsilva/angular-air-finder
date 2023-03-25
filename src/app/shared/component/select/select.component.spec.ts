import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports:[
        MatFormFieldModule,
        MatChipsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('select component', () => {
    beforeEach(() => {
      component.items = [
        { name: 'Person 1', value: 1 },
        { name: 'Person 2', value: 2 },
        { name: 'Person 3', value: 3 }
      ];
      component.selected(component.items[0].value);
    });

    afterEach(() => {
      component.items.forEach(item => {
        if(component.valuesSelected.filter(v => v == item).length == 0){
          expect(component.checked(item.value)).toBeFalsy();
        }
        else{
          expect(component.checked(item.value)).toBeTruthy();
        }
      })
    })

    it('should remove a select by chip', () => {
      const itemToRemove = component.items[0];

      component.remove(itemToRemove);
      const indeterminated = component.indeterminated();

      expect(component.valuesSelected.find(x => x == itemToRemove)).toBeUndefined();
      expect(indeterminated).toBeFalsy();
    });

    it('should remove a select by list', () => {
      const itemToRemove = component.items[0];

      component.selected(itemToRemove.value);
      const indeterminated = component.indeterminated();

      expect(component.valuesSelected.find(x => x == itemToRemove)).toBeUndefined();
      expect(indeterminated).toBeFalsy();
    });

    it('should remove all', () => {
      component.selectAll = true;

      component.toggleSelectAll();
      const indeterminated = component.indeterminated();

      expect(component.valuesSelected).toEqual([])
      expect(indeterminated).toBeFalsy();
    });

    it('should add a select', () => {
      const itemToAdd = component.items[1];

      component.selected(itemToAdd.value);
      const indeterminated = component.indeterminated();

      expect(component.valuesSelected.find(x => x == itemToAdd)).toBeDefined();
      expect(indeterminated).toBeTruthy();
    });

    it('should select all', () => {
      component.selectAll = false;

      component.toggleSelectAll();
      const indeterminated = component.indeterminated();

      expect(component.valuesSelected).toEqual(component.items);
      expect(indeterminated).toBeFalsy();
    });

    it('should create form format', () => {
      const result = component.createFormFormat();

      expect(result).toEqual([1]);
    });
  });

  describe('list', () => {
    it('should close', () => {
      component.open = true;

      spyOn(fixture.nativeElement, 'contains').and.returnValue(false);
      fixture.nativeElement.click();

      expect(component.open).toBeFalsy();
    });

    it('should keep open', () => {
      component.open = true;
      
      spyOn(fixture.nativeElement, 'contains').and.returnValue(true);
      fixture.nativeElement.click();

      expect(component.open).toBeTruthy();
    });
  })
});
