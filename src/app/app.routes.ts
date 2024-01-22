import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'signin', component: SigninComponent },
];
