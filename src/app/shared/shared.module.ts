import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromptCardComponent } from './components/prompt-card/prompt-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RouterModule } from '@angular/router';
import { BlobComponent } from './components/blob/blob.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    PromptCardComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    BlobComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, HeroComponent, FooterComponent, BlobComponent], 
})
export class SharedModule { }
