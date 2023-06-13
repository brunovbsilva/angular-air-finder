import { MatSelect } from "@angular/material/select";
import { CustomOpenDirective } from "./custom-open.directive";
import { ElementRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TestBed } from "@angular/core/testing"

describe('CustomOpenDirective', () => {
  let directive: CustomOpenDirective;
  let matSelectSpy: { open: jasmine.Spy, options: { toArray: jasmine.SpyObj<number[]> }, multiple: jasmine.Spy, placeholder: jasmine.Spy};
  let elRefSpy: { nativeElement: jasmine.Spy };
  let matDialogSpy: { open: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatSelect, useValue: matSelectSpy },
        { provide: ElementRef, useValue: elRefSpy },
        { provide: MatDialog, useValue: matDialogSpy }
      ]
    });
    matSelectSpy = jasmine.createSpyObj('MatSelect', ['open', 'options', 'multiple', 'placeholder']);
    elRefSpy = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    directive = new CustomOpenDirective(matSelectSpy as any, elRefSpy as any, matDialogSpy as any);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // describe('ngAfterViewInit', () => {
  //   it('should call open', () => {
  //     directive.ngAfterViewInit();
  //     matSelectSpy.open.and.callFake(() => { });
  //     expect(matSelectSpy.open).toHaveBeenCalledTimes(1);
  //   });
  // });

  // describe('openSelectDialog', () => {
  //   it('should call open', () => {
  //     matDialogSpy.open.and.returnValue({ afterClosed() { return of({}) }});
  //     directive.openSelectDialog();
  //   });
  // })
});
