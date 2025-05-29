import { getNgModuleById, inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { ProductService } from "./products.service";
import { map, startWith, Subject, switchMap } from "rxjs";
interface State {
    product: Product | null;
    status: 'loading' | 'success' | 'error';
}


@Injectable()
export class ProductsStateService {

    private productsService = inject(ProductService);
    private initialState: State = {
        product: null,
        status: 'loading',
   
    };

    
        
    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById: (_state, $: Observable<string>) => $.pipe (
                switchMap((id) => this.productsService.getProduct(id)),
                map(data => ({ product: data, status: 'success' as const})),
            )
        }
    });

    
}