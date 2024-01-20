import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-card',
  templateUrl: './prompt-card.component.html',
  styleUrls: ['./prompt-card.component.scss'],
})
export class PromptCardComponent {
  copied: boolean = false;
  promtText: string = 'This is prompt text';

  handleCopy() {
    this.copied = true;
    // console.log(this.copied)

    setTimeout(() => {
      this.copied = false;
      // console.log(this.copied)
    }, 1000);
  }
}
