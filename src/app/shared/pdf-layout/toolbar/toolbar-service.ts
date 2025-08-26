import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private content$ = new Subject<TemplateRef<any>>();

  getContent(): Observable<TemplateRef<any>> {
    return this.content$.asObservable();
  }

  setContent(ref: TemplateRef<any>): void {
    this.content$.next(ref);
  }

}
