import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { user2 } from '../hero';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  goBack(): void {
    this.location.back();
  }
  containsSpecialCharsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const containsSpecialChars = specialChars.test(control.value);
      return containsSpecialChars ? null : { containsSpecialChars: true };
    };
  }
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), this.containsSpecialCharsValidator()]),
  })
  registerUser() {
    const u: string = String(this.registerForm.value.username).trim();
    const e: string = String(this.registerForm.value.email).trim();
    const p: string = String(this.registerForm.value.password).trim();
    const model = new user2(u, e, p);
    this.userService.createUser(model).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating users')
    )
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

}