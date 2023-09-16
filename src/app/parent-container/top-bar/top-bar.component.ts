import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryList } from './category-list/ICategoryList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() public categoriesFromParent!: Array<ICategoryList>;

  constructor(private readonly router: Router){}
  public ngOnInit(): void {
    
  }
  public onLogin(){
    this.router.navigate(['login-page'])
  }
}
