import { Component, HostBinding, ViewChild, NgModule, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { HeroService } from './service/hero.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { UserService } from './service/user.service';
import {AuthService} from './service/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        zIndex:'10'
      })),

      state('closed', style({
        transform: 'translateY(-150%)',
        zIndex:'-10'
      })),

      transition('open => closed', [
        animate('500ms ease',
          keyframes([
            style({ zIndex:'-10',transform: 'translateY(-10%)' }),
            style({ transform: 'translateY(-50%)' }),
            style({ transform: 'translateY(-80%)' }),
            style({ transform: 'translateY(-113%)',})
          ]))
      ]),

      transition('closed => open', [
        animate('500ms ease',
          keyframes([
            style({ zIndex:'-10',transform: 'translateY(-95%)' }),
            style({ transform: 'translateY(-80%)' }),
            style({ transform: 'translateY(-60%)' }),
            style({ transform: 'translateY(-30%)' }),
            style({ transform: 'translateY(0)'})
          ]))
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService){
  }
  title = 'Tour of Heroes';
  isOpen = false;
  ngOnInit(): void {

  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
