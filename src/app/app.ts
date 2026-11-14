import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button';
import { Catalog } from './components/catalog/catalog';
import { NavBar } from './components/nav-bar/nav-bar';
import { Card } from './components/card/card';



@Component({
  selector: 'app-root',
  imports: [ButtonComponent, Catalog, NavBar, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
