import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthUser { username: string; token: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'vs_portfolio_token';
  private readonly ADMIN_USER = 'vimalan';
  private readonly ADMIN_PASS = 'Admin@2025';

  private currentUserSubject = new BehaviorSubject<AuthUser | null>(this.loadUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  get isLoggedIn(): boolean { return !!this.currentUserSubject.value; }
  get currentUser(): AuthUser | null { return this.currentUserSubject.value; }

  login(username: string, password: string): Observable<AuthUser> {
    if (username === this.ADMIN_USER && password === this.ADMIN_PASS) {
      const user: AuthUser = {
        username,
        token: btoa(`${username}:${Date.now()}:vs_portfolio_secret`)
      };
      return of(user).pipe(
        delay(800),
        tap(u => { localStorage.setItem(this.TOKEN_KEY, JSON.stringify(u)); this.currentUserSubject.next(u); })
      );
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  private loadUser(): AuthUser | null {
    try { return JSON.parse(localStorage.getItem(this.TOKEN_KEY) || 'null'); }
    catch { return null; }
  }
}
