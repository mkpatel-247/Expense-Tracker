import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { CommonService } from 'src/shared/services/common.service';
import { AuthService } from 'src/shared/services/auth.service';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'expense-tracker';

  @HostBinding('class.dark') get mode() {
    return this.commonService.darkMode();
  }

  constructor(private router: Router, private commonService: CommonService, public authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.router.navigateByUrl('/auth/login')
    }
  }
}
