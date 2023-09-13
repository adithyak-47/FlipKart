import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentContainerComponent } from './parent-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    ParentContainerComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentContainerComponent
  ]
})
export class ParentContainerModule { }
