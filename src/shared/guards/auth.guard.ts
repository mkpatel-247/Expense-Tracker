import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!localStorage.getItem('authToken')) {
    authService.isUserLoggedIn.set(false);
    router.navigateByUrl('auth/login');
    return false;
  } else {
    return true;
  }
};
