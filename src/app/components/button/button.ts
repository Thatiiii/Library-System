import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
  clickCount = 0;

  onButtonClick(): void {
    this.clickCount += 1;
  }
}
