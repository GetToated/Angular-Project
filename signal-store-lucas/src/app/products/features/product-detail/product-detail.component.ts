import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsStateService } from '../../data-access/product-detail-state.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  providers: [ProductsStateService]
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductsStateService).state;
  id = input.required<string>();
  constructor() {
   const id$ = toObservable(computed(() => this.id()));
  
  this.productDetailState.getById(id$); 

  effect(() => {
    console.log('Loading product with id:', this.id());
  });

  }
}
