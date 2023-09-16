import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private readonly router: Router){

  }
  public onLogin(){
    this.router.navigate([''])
  }
  public onSignUp(){
    this.router.navigate(['signup-page'])
  }
}
