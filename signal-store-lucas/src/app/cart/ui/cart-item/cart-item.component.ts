import { Component, output } from '@angular/core';
import { input } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemCart>();

  onRemove = output<number>();

  onIncrease = output<ProductItemCart>();

  onDecrase = output<ProductItemCart>();
}
