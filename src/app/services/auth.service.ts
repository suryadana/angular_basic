import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    super();
  }

  login(userModel: UserModel): Observable<UserModel | {}> {
    return this.http.post<UserModel>(`${this.urlBase}/auth/`, userModel).pipe(
      tap( user => console.log(user) ),
      catchError( (error) => this.handleError(error) )
    );
  }

  register(userModel: UserModel): Observable<UserModel | {}> {
    return this.http.post<UserModel>(`${this.urlBase}/auth/register/`, userModel).pipe(
      tap( user => console.log(user) ),
      catchError( (error) => this.handleError(error) )
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
