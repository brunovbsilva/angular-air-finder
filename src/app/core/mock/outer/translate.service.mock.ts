import { EventEmitter, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

export default class TranslateServiceMock implements PipeTransform {
  public name = 'translate';
  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  public transform(query: string, ...args: any[]): any {
    return query;
  }

  get(value?: string | undefined): Observable<string | undefined> {
    return of(value);
  }

  setDefaultLang(): void { }

  use(): void { }
}
