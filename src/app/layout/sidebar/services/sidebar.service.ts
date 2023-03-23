import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private subject: Subject<void> = new Subject<void>;

  constructor() { }

  public sendToggleSidebarState() {
    return this.subject.next();
  }

  public getToggleSidebarState(): Observable<void> {
    return this.subject.asObservable();
  }
}
