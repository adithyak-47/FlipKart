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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { authGuard } from '../guard/auth.guard';



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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ParentContainerComponent
  ],
  providers:[
    LocalStorageService,
    ApiService,
  ]
})
export class ParentContainerModule { }
