import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../types/userType';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) {}

  signup(user: Partial<User>): Observable<User> {
    console.log('lkjhgf');

    return this.http
      .post<User>(`${this.apiUrl}/signup`, user)
      .pipe(catchError(this.handleError));
  }

  login(
    email: string,
    password: string
  ): Observable<{ user: User; token: string }> {
    return this.http
      .post<{ user: User; token: string }>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(
        catchError(this.handleError),
        map((response) => {
          // Store token in localStorage or secure storage
          localStorage.setItem('authToken', response.token);
          return response;
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      catchError(this.handleError),
      map(() => {
        // Remove stored token
        localStorage.removeItem('authToken');
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = 'Invalid input. Please check your details.';
          break;
        case 409:
          errorMessage = 'Email already exists.';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
