import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TokenResponse } from '../models/authentication.models';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URI = environment.apiRoot;

  private readonly http = inject(HttpClient);

  private token = "";
  private authenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.autoLogin();
  }

  login(password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.post<TokenResponse>(
      `${this.URI}/token`,
      { password: password },
      { headers }
    ).pipe(
      map((response) => {
        localStorage.setItem("accessToken", response.accessToken);
        this.token = response.accessToken;
        this.authenticated$.next(true);
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return of(false);
        } else {
          throw error;
        }
      })
    );
  }

  logout(): Observable<void> {
    this.authenticated$.next(false);
    localStorage.removeItem("accessToken");

    return this.http.post<void>(`${this.URI}/logout`, null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated$.asObservable();
  }

  private autoLogin(): void {
    this.token = localStorage.getItem("accessToken") ?? "";
    this.authenticated$.next(this.token ? true : false);
  }
}
