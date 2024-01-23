import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prompt-card',
  templateUrl: './prompt-card.component.html',
  styleUrls: ['./prompt-card.component.scss'],
})
export class PromptCardComponent {
  copied: boolean = false;
  @Input() promptText: string = '';

  handleCopy() {
    navigator.clipboard.writeText(this.promptText)
      .then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  }
}
