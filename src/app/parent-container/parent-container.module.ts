import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentContainerComponent } from './parent-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './top-bar/category-list/category-list.component';
import { LocalStorageService } from '../service/local-storage.service';
import { ParentContainerRoutingModule } from './parent-container-routing.module';



@NgModule({
  declarations: [
    ParentContainerComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    ParentContainerRoutingModule,
  
  ],
  exports:[
    ParentContainerComponent
  ],
  providers:[
    LocalStorageService
  ]
})
export class ParentContainerModule { }
