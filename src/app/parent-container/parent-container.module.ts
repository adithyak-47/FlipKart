import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentContainerComponent } from './parent-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './top-bar/category-list/category-list.component';



@NgModule({
  declarations: [
    ParentContainerComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentContainerComponent
  ]
})
export class ParentContainerModule { }
