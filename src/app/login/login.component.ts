import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    private router: Router
  ) { }


  // onSubmit() {
  //   this.submitted = true;
  //   const name= this.model.email.trim();
  //   const password= this.model.password.trim();

  
  // }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  loginUser() {
    const e: string = String(this.loginForm.value.email).trim();
    const p: string = String(this.loginForm.value.password).trim();
    this.authService
      .login(e, p)
      .subscribe((response: any) => {
        this.router.navigate(['dashboard']);
      });
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }
}