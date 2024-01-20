import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-card',
  templateUrl: './prompt-card.component.html',
  styleUrls: ['./prompt-card.component.scss'],
})
export class PromptCardComponent {
  copied: boolean = false;
  promptText: string = 'This is prompt text';

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
