import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { LoginPageComponent } from './parent-container/login-page/login-page.component';
import { ProductListComponent } from './parent-container/product-list/product-list.component';
import { SignUpPageComponent } from './parent-container/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./parent-container/parent-container.module').then(m => m.ParentContainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
