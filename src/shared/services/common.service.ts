import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  darkMode = signal<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? 'false'));

  constructor() { }
}
