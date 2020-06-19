import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "reset",
    component: ResetComponent
  },
  {
    path: "password",
    component: PasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
