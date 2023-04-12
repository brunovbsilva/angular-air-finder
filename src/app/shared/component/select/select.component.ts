import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from './models/select.model';
import { debounceTime, distinctUntilChanged, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;
  @Input() form: FormGroup = new FormGroup({});
  @Input() label?: string;
  @Input() placeholder?: string;
  private get _items() {
    return of(this.items);
  };
  @Input() items!: SelectModel[];
  @Input() name: string = '';
  @Input() itemsInView: number = 3;
  private _open: boolean = false;
  public set open(value: boolean){
    this._open = value;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 1);
  };
  public get open(){
    return this._open;
  };
  public selectAll: boolean = false;
  public indeterminated: boolean = false;

  constructor(private eRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.checkSelectAllState();
    this.updateItems();
  }

  private updateForm() {
    this._items.pipe(
      debounceTime(10),
      distinctUntilChanged(),
      map((value) => value.filter(v => v.selected).map(i => i.value))
    ).subscribe(v => {
      this.form.get(this.name)?.patchValue(v)
    });
  }

  private updateItems() {
    this.form.get(this.name)?.valueChanges
      .pipe(
        debounceTime(10),
        distinctUntilChanged(),
        tap((v) => console.log(v)),
        map((v) => v ?? []),
        map((value: (string | number)[]) => {
          var result = this.items;
          result.forEach((item) => {
            item.selected = value.find(x => x == item.value) != undefined;
          })
          return result;
        })
      ).subscribe((value: SelectModel[]) => {
        this.items = value;
        this.checkSelectAllState();
      });
  }

  // Non forms changes
  openList() {
    this.open = true;
  }

  selectItem(value: string | number): void {
    const index = this.items.findIndex(x => x.value == value);
    this.items[index].selected = true;
    this.checkSelectAllState();
    this.updateForm();
  }

  unselectItem(value: string | number): void {
    if(value == 'extra'){
      this.items.filter((v) => 
        v.selected
      ).filter((v, index) => 
        index >= this.itemsInView
      ).forEach((v) => {
        var i = this.items.findIndex(x => x == v);
        this.items[i].selected = false;
      })
    }
    else{
      const index = this.items.findIndex(x => x.value == value);
      this.items[index].selected = false;
    }
    this.checkSelectAllState();
    this.updateForm();
  }

  toggleSelectItem(value: string | number): void {
    const index = this.items.findIndex(x => x.value == value);
    this.items[index].selected = !this.items[index].selected;
    this.checkSelectAllState();
    this.updateForm();
  }

  toggleSelectAll() {
    this.items.filter(x => x.selected == this.selectAll).forEach(x => {
      x.selected = !this.selectAll;
    });
    this.checkSelectAllState();
    this.updateForm();
  }

  checkSelectAllState() {
    const selected = this.items.filter(v => v.selected).length;
    const all = this.items.length;
    if(selected == all){
      this.selectAll = true;
      this.indeterminated = false;
    }
    else {
      this.selectAll = false
      this.indeterminated = selected != 0;
    }
  }

  // Listener
  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.searchInput.nativeElement.value = null;
      this.open = false;
    }
  }
}
