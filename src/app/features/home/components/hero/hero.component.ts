import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private toastService = inject(ToastService);

  scrollToProducts(): void {
    const productsElem = document.getElementById('featured-products');
    if (productsElem) {
      productsElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.toastService.show(
        '☕ Exploring Our Tea',
        'Discover our Assam tea collection below.',
        'success'
      );
    }
  }

  onStoryClick(): void {
    this.toastService.show(
      '🍃 Our Story',
      'Learn how EveryDay Tea brings garden-fresh tea to millions of Indian homes.',
      'info'
    );
  }
}
