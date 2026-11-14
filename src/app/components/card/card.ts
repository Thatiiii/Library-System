import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card overview
 */
@Component({
  selector: 'card',
  standalone: true,
  templateUrl: 'card.html',
  styleUrl: 'card.css',
  imports: [MatCardModule, MatButtonModule],
})
export class Card {}

