import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = signal<boolean>(false);

  constructor() { }
}
