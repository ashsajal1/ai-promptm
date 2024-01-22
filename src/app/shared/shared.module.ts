import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromptCardComponent } from './components/prompt-card/prompt-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    PromptCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, HeroComponent, FooterComponent] 
})
export class SharedModule { }
