import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Toast } from '../../utils/toast';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private toast: Toast;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.toast = new Toast;
  }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.toast.error('You must be login first.');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
