import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Header } from './header/header';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductsGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('course-modern-angular');
}
