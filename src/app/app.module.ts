import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { FooterComponent } from './components/layouts/includes/footer/footer.component';
import { NavigationComponent } from './components/layouts/includes/navigation/navigation.component';
import { HeaderComponent } from './components/layouts/includes/header/header.component';
import { AuthComponent } from './components/layouts/auth/auth.component';
import { MainComponent } from './components/layouts/main/main.component';
import { LoginComponent } from './components/auths/login/login.component';
import { ForgotComponent } from './components/auths/forgot/forgot.component';
import { RegisterComponent } from './components/auths/register/register.component';
import { ProfileComponent } from './components/mains/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeModule } from './modules/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    AuthComponent,
    MainComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    AppRoutingModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
