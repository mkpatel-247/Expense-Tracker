import { Component, effect, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkMode = signal<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? 'false'));

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    })
  }
}
