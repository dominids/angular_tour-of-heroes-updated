import { Injectable } from '@angular/core';
import {UserService} from '../service/user.service'
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$= new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  constructor(private userService: UserService) {
    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
   }

  login(email: string, password: string){
    return this.userService.login(email,password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth',response.token);
        console.log(response.token);
      })
    )
  }
}
