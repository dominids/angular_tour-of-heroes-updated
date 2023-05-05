import { Component, OnInit } from '@angular/core';
import { Hero, User, user2 } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }
  submitted = false;
  onSubmit() { this.submitted = true; }
  model = new user2('', '', '');

  private user: User = {
    "username": "Mark",
    "email": "mark3@gmail.com",
    "password": "1234567",
  }
  
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating users')
    )
  }
  goBack(): void {
    this.location.back();
  }
}