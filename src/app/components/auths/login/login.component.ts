import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Toast } from '../../../utils/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private toast: Toast;
  @Input() public userModel: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userModel = new UserModel;
    this.toast = new Toast;
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userModel).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.toast.success('Login success.');
        this.router.navigate(['profile']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
