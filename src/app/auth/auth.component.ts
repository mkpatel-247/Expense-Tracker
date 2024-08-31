import { Component, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';
import { CommonService } from 'src/shared/services/common.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, public commonService: CommonService) { }

  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.router.navigateByUrl('');
    } else {
      // this.authService.isUserLoggedIn.set(true);
      // localStorage.setItem('authToken', JSON.stringify('[{}]'))
    }
    this.createLoginFormControls();
  }

  createLoginFormControls() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmitForm() {
    if (this.loginForm.valid) {
      const details = this.loginForm.value;
      if (details.email == 'test@demo.com' && details.password == '123456') {
        effect(() => {
          this.authService.isUserLoggedIn.set(true);
        })
        localStorage.setItem('authToken', JSON.stringify({ user: 'VALID' }));
      }
    }
    this.loginForm.markAllAsTouched();
  }
}
