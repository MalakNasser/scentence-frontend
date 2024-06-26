import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, userData);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() ? true : false;
  }
}
