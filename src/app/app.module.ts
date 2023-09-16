import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentContainerModule } from './parent-container/parent-container.module';
import { LoginPageComponent } from './parent-container/login-page/login-page.component';
import { SignUpPageComponent } from './parent-container/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
