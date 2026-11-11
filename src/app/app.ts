import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button';
import { Catalog } from './components/catalog/catalog';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
