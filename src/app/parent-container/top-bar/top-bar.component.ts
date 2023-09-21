import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryList } from './category-list/ICategoryList';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { IUserDetails } from '../IUserDetails';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() public categoriesFromParent!: Array<ICategoryList>;

  public userLoggedIn: boolean = false;

  constructor(private readonly router: Router, private readonly localStorageService: LocalStorageService){}
  public ngOnInit(): void {

    const user = this.localStorageService.getUserDetails();
    if(user !== '') this.userLoggedIn = true;
    else this.userLoggedIn = false;
    
  }
  public onLogin(){
    this.userLoggedIn = true;
    this.router.navigate(['login-page'])
  }

  public onCart(): void{
    this.router.navigate(['cart'])
  }

  public onLogout(): void{
    this.localStorageService.logUserOut();
  }
}
