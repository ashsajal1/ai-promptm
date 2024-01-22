import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { SigninComponent } from './shared/pages/signin/signin.component';
import { SignupComponent } from './shared/pages/signup/signup.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
