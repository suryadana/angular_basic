import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Input() public userModel: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userModel = new UserModel;
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userModel).subscribe(
      response => {
        this.router.navigate(['profile']);
      }
    )
  }

}
