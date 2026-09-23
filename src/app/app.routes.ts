import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'EveryDay Tea | Organic Assam Tea — Har Subah, Har Chai'
  },
  // TODO: Future route implementations for remaining pages
  // { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  // { path: 'products', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
  // { path: 'sourcing', loadComponent: () => import('./features/sourcing/sourcing.component').then(m => m.SourcingComponent) },
  // { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent) },
  // { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
  // { path: 'faq', loadComponent: () => import('./features/faq/faq.component').then(m => m.FaqComponent) },
  // { path: 'wholesale', loadComponent: () => import('./features/wholesale/wholesale.component').then(m => m.WholesaleComponent) },
  // { path: 'franchise', loadComponent: () => import('./features/franchise/franchise.component').then(m => m.FranchiseComponent) },
  {
    path: '**',
    redirectTo: ''
  }
];
