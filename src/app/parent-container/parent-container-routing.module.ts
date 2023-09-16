import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentContainerModule } from './parent-container.module';
import { ParentContainerComponent } from './parent-container.component';


const routes: Routes = [
  {
    path:'',
    component: ParentContainerComponent
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
  ]
})
export class ParentContainerRoutingModule { }
