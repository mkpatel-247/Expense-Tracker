import { Component, effect, HostBinding, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { CommonService } from 'src/shared/services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(public authService: AuthService, public commonService: CommonService) {
    effect(() => {
      localStorage.setItem('darkMode', JSON.stringify(this.commonService.darkMode()));
    })
  }
}
