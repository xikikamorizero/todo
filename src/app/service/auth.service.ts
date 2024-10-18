import { Injectable } from '@angular/core';
import { AuthType, User } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, debounceTime, delay, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  login$ = new Subject<{ success: boolean; message: string }>();
  registration$ = new Subject<{ success: boolean; message: string }>();

  constructor() {
    this.isAuth$.subscribe((isAuth) => {
      localStorage.setItem('isAuth', isAuth ? 'true' : 'false');
    });
  }

  login(data: AuthType) {
    const users = this.getUsersFromLocalStorage();
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    setTimeout(() => {
      if (user) {
        this.isAuthSubject.next(true);
        this.login$.next({
          success: true,
          message: 'Authentication successful',
        });
        return;
      }

      this.login$.next({
        success: false,
        message: 'Incorrect email or password',
      });
    }, 5000);
  }
  registration(data: AuthType) {
    const users = this.getUsersFromLocalStorage();
    const userExists = users.some((user) => user.email === data.email);

    setTimeout(() => {
      if (userExists) {
        this.registration$.next({
          success: false,
          message: 'The user already exists',
        });
        return;
      }

      users.push({ email: data.email, password: data.password });
      this.saveUsersToLocalStorage(users);
      this.isAuthSubject.next(true);
      this.registration$.next({
        success: true,
        message: 'User registered successfully',
      });
    }, 5000);
  }

  logout() {
    this.isAuthSubject.next(false);
  }

  initializeAuthState() {
    const isAuth = localStorage.getItem('isAuth') === 'true';
    this.isAuthSubject.next(isAuth);
  }

  private getUsersFromLocalStorage(): User[] {
    const usersJSON = localStorage.getItem('localDataBase');
    return usersJSON ? JSON.parse(usersJSON) : [];
  }

  private saveUsersToLocalStorage(users: User[]): void {
    localStorage.setItem('localDataBase', JSON.stringify(users));
  }
}
