import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddItem: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();
 
  constructor() {}
 
  toggleAddItem(): void {
    this.showAddItem = !this.showAddItem;
    this.subject.next(this.showAddItem);
  }
 
  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}