import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Toast } from '../../utils/toast';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoGuardService implements CanActivate {

  private toast: Toast;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.toast = new Toast;
  }
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.toast.warning('You already login.');
      this.router.navigate(['/profile']);
      return false;
    }
    return true;
  }
}
