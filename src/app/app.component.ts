import { Component,HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '1px',
        opacity: 1,
        width: '1px',
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.0,
        width: '0px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class AppComponent { 
  title = 'Tour of Heroes';
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}            
     