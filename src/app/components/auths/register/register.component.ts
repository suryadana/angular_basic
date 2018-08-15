import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  @Input() public userModel: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userModel = new UserModel;
  }

  ngOnInit() {

  }

  register() {
    this.authService.register(this.userModel).subscribe(
      response => {
        this.router.navigate(['']);
      }
    )
  }

}
