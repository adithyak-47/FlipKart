import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { LoginPageComponent } from './parent-container/login-page/login-page.component';
import { ProductListComponent } from './parent-container/product-list/product-list.component';
import { SignUpPageComponent } from './parent-container/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: ParentContainerComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'signup-page',
    component: SignUpPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
