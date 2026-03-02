import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  changeImage(newImg: string) {
    this.product.image = newImg;
  }

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}
