import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WordmarkLogoComponent } from '../../shared/components/wordmark-logo/wordmark-logo.component';
import { CartService } from '../../core/services/cart.service';
import { NavItem } from '../../core/models/tea.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, WordmarkLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService = inject(CartService);

  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Wholesale (B2B)', path: '/wholesale' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollOffset > 40);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  openCart(): void {
    this.closeMobileMenu();
    this.cartService.openCart();
  }
}
