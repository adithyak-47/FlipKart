import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(private readonly router: Router){

  }

  public onLogin(){
    this.router.navigate(['login-page'])
  }

  //if login successful change title from 'Login' to 'My Account'
}
