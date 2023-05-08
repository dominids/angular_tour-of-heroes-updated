import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, retry, tap } from 'rxjs';
import { User } from '../hero';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, {email,password});
  }


  createUser(user: User): Observable<User> {
    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(`${this.apiUrl}/register`, user, httpOptions)
  }

  updateUser(user: User): Observable<User> {
    //put musisz dać wszystkie wartości bo reszta będzie domyślna
    // różni się w zależności od api
    return this.http.put<User>(`${this.apiUrl}/${user._id}`, user)
  }

  deleteUser(id: string): Observable<void> {
    //delete daje ci najczęściej boolean^
    //void bo nic nie dostajemy w odpowiedzi od servera 
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
