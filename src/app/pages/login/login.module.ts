import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HomeComponent } from "../home/home.component"
import { ShareModule } from "../../models/share/share.module"

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }
