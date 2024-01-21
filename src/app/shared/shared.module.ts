import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, HeroComponent, FooterComponent] 
})
export class SharedModule { }
