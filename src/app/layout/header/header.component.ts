import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WordmarkLogoComponent } from '../../shared/components/wordmark-logo/wordmark-logo.component';
import { ToastService } from '../../core/services/toast.service';
import { NavItem } from '../../core/models/tea.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, WordmarkLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private toastService = inject(ToastService);

  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Products', path: '/products' },
    { label: 'Sourcing & Gardens', path: '/sourcing' },
    { label: 'Tea Journal', path: '/blog' },
    { label: 'Contact', path: '/contact' }
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

  onShopClick(): void {
    this.closeMobileMenu();
    this.toastService.show(
      '☕ Shop EveryDay Tea',
      'Redirecting to our organic Assam tea collection...',
      'success'
    );
  }
}
