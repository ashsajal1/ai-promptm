import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PagesModule { }
