import { Route } from "@angular/router";

export default [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {path: 'products', loadComponent: () => import('../product-list/product-list.component')},
    {path: 'product/:id', loadComponent: () => import('../product-detail/product-detail.component')}
] as Route[];