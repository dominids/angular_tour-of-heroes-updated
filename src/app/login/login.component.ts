import { Component, OnInit } from '@angular/core';
import { Hero, user2 } from '../hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { Router, response } from 'express';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: AppRoutingModule,
    private authService: AuthService
  ) { }
  heroes: Hero[] = [];
  submitted = false;
  model = new user2('', '', '');


  onSubmit() {
    this.submitted = true;
    const name= this.model.email.trim();
    const password= this.model.password.trim();

    this.authService
      .login(name, password)
      .subscribe((response: any) => {
      });
  }
}