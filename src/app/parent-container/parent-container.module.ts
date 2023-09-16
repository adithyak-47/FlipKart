import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentContainerComponent } from './parent-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './top-bar/category-list/category-list.component';
import { LocalStorageService } from '../service/local-storage.service';
import { ParentContainerRoutingModule } from './parent-container-routing.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    ParentContainerComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryListComponent,
    LoginPageComponent,
    SignUpPageComponent,
    AddToCartComponent
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
