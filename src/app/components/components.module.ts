import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptCardComponent } from './prompt-card/prompt-card.component';

@NgModule({
  declarations: [PromptCardComponent],
  imports: [CommonModule],
  exports: [PromptCardComponent],
})
export class ComponentsModule {}
