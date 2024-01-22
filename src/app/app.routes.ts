import { Routes, provideRouter } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './shared/hero/hero.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: '', component: NavbarComponent },
    { path: 'signup', component: SignupComponent },
];
