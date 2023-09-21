import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentContainerModule } from './parent-container.module';
import { ParentContainerComponent } from './parent-container.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { authGuard } from '../guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpToHttpsService } from '../service/http-to-https.service';


const routes: Routes = [
  {
    path:'',
    component: ParentContainerComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'signup-page',
    component: SignUpPageComponent
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    component: AddToCartComponent
  } 
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpToHttpsService,
      multi: true
    },
  ]
})
export class ParentContainerRoutingModule { }
