import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component'; // Проверь путь!
import { Product, Category } from './models/product.model';
import { CATEGORIES, PRODUCTS } from './db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = CATEGORIES;
  products = PRODUCTS;
  selectedCategory: Category | null = null;
  visibleProducts: Product[] = [];

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
    this.visibleProducts = this.products.filter(p => p.categoryId === cat.id);
  }
}