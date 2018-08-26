import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { LoginComponent } from './components/auths/login/login.component';
import { RegisterComponent } from './components/auths/register/register.component';
import { ForgotComponent } from './components/auths/forgot/forgot.component';
import { MainComponent } from './components/layouts/main/main.component';
import { ProfileComponent } from './components/mains/profile/profile.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { NoGuardService } from './services/guards/no-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [NoGuardService],
    children: [
      { path: '', component: LoginComponent,  },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotComponent }
    ]
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
