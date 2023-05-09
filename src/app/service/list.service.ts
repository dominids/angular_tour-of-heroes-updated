import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private myData = new BehaviorSubject<any>(null);
  myData$ = this.myData.asObservable();

  constructor() { }

  setMyData(data: any) {
    this.myData.next(data);
  }
}
