import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryList } from './category-list/ICategoryList';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{

  @Input() public categoriesFromParent!: Array<ICategoryList>;

  constructor(){}
  public ngOnInit(): void {
    
  }

  


}
