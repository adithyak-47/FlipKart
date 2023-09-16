import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryList } from './category-list/ICategoryList';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() public categoriesFromParent!: Array<ICategoryList>;

  constructor(private readonly router: Router, private readonly localStorageService: LocalStorageService){}
  public ngOnInit(): void {
    
  }
  public onLogin(){
    this.router.navigate(['login-page'])
  }

  public onCart(): void{

    const user = this.localStorageService.getUserDetails();
    if(user == '') this.router.navigate(['signup-page']);

    else this.router.navigate(['cart']);
  }
}
