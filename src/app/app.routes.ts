import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'EveryDay Tea | Organic Assam Tea — Har Subah, Har Chai'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | EveryDay Tea — Our Assam Heritage & Vision'
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent),
    title: 'Shop Organic Assam Tea | EveryDay Tea & EveryDay Gold'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | EveryDay Tea Customer Care'
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq.component').then(m => m.FaqComponent),
    title: 'Help & FAQ | EveryDay Tea'
  },
  {
    path: 'wholesale',
    loadComponent: () => import('./features/wholesale/wholesale.component').then(m => m.WholesaleComponent),
    title: 'Wholesale & B2B Bulk Tea Orders | EveryDay Tea'
  },
  {
    path: 'franchise',
    loadComponent: () => import('./features/franchise/franchise.component').then(m => m.FranchiseComponent),
    title: 'Franchise Opportunities | Partner With EveryDay Tea'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
