import { Component, inject } from '@angular/core';
import { ProductService } from '../../data-access/products.service';
import { ProductsStateService } from '../../data-access/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService],
})
export default class ProductListComponent {

  productsState = inject(ProductsStateService);

  changePage() {
    const page = this.productsState.state.page() + 1
    this.productsState.changePage$.next(page);
  }
}
