import { Component, Input } from '@angular/core';
import { ICategoryList } from './ICategoryList';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {


  @Input() public categoriesList!: Array<ICategoryList>;

  constructor(){}

}
