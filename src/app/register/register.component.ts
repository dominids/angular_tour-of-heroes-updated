import { Component, OnInit } from '@angular/core';
import { Hero, User, user2 } from '../hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }
  submitted = false;
  model = new user2('', '', '');


  onSubmit() {
    this.submitted = true;

    this.model = {
      "username": this.model.username.trim(),
      "email": this.model.email.trim(),
      "password": this.model.password.trim(),
    }

      this.userService.createUser(this.model).subscribe(
        (response) => console.log(response),
        (error: any) => console.log(error),
        () => console.log('Done creating users')
  )}
  
  goBack(): void {
    this.location.back();
  }
}