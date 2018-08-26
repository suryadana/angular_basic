import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    super();
  }

  login(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.urlBase}/auth/`, userModel).pipe(
      map( user => {
        return user;
      }),
      catchError( this.handleError('login', this.router) )
    );
  }

  register(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.urlBase}/auth/register/`, userModel).pipe(
      map( user => {
        return user;
      }),
      catchError( this.handleError('register', this.router) )
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
