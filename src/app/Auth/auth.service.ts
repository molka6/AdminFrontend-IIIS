import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiUrl="http://localhost:8000/api/login"; 

  constructor(private http: Http) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


  login(username: string, password: string) {
    return this.http.post('http://localhost:8000/api/login', { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }

}

export class User{

}
