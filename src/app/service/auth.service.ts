import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service'
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  private readonly TOKEN_NAME = 'Bearer';
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private userService: UserService, private router: Router) {
    this._isLoggedIn$.next(!!this.token);
  }

  login(email: string, password: string) {
    return this.userService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
      })
    )
  }
  logout() {
    localStorage.removeItem("Bearer");
    this._isLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
