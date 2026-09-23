import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/tea.models';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  private toastService = inject(ToastService);

  readonly activeCategory = signal<string>('all');

  readonly products: Product[] = [
    {
      id: 'everyday-original',
      name: 'EveryDay Original Assam Tea',
      tagline: 'Kadak & Refreshing Everyday Morning Chai',
      price: 249,
      weight: '500g Pack',
      rating: 4.9,
      reviewsCount: 1280,
      badge: 'Bestseller',
      isGold: false,
      category: 'original',
      description: 'Hand-picked organic Assam CTC tea leaves yielding a rich golden brew with strong aroma and bold strength.',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-gold',
      name: 'EveryDay Gold Premium Reserve',
      subTitle: 'Premium Orthodox & Rich Golden Leaf Blend',
      tagline: 'Extra Strength & Royal Assam Aroma',
      price: 349,
      weight: '500g Tin Pack',
      rating: 5.0,
      reviewsCount: 940,
      badge: 'EveryDay Gold Line',
      isGold: true,
      category: 'gold',
      description: 'Our signature sub-brand blend combining long-leaf Assam Orthodox tea with strong CTC for an elevated everyday luxury.',
      image: 'https://images.unsplash.com/photo-1563822249510-04678c787dd2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-masala',
      name: 'EveryDay Masala Chai',
      tagline: 'Infused with Real Elaichi, Dalchini & Laung',
      price: 299,
      weight: '250g Pack',
      rating: 4.8,
      reviewsCount: 620,
      badge: 'Spiced Special',
      isGold: false,
      category: 'masala',
      description: 'Authentic organic Assam tea blended with crushed natural spices for a warming, aromatic cup.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-green',
      name: 'EveryDay Tulsi Green Tea',
      tagline: 'Whole Leaf Organic Detox & Antioxidants',
      price: 329,
      weight: '250g Tin Pack',
      rating: 4.9,
      reviewsCount: 410,
      badge: 'Organic Health',
      isGold: false,
      category: 'green',
      description: 'Pure whole leaf green tea paired with organic Rama & Krishna Tulsi leaves for daily vitality.',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80'
    }
  ];

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  get filteredProducts(): Product[] {
    const category = this.activeCategory();
    if (category === 'all') return this.products;
    if (category === 'gold') return this.products.filter(p => p.isGold);
    return this.products.filter(p => p.category === category);
  }

  addToCart(product: Product): void {
    if (product.isGold) {
      this.toastService.show(
        `✨ Added ${product.name}`,
        `1 × ${product.weight} added to your cart (₹${product.price}). Premium choice!`,
        'gold'
      );
    } else {
      this.toastService.show(
        `🍵 Added ${product.name}`,
        `1 × ${product.weight} added to your cart (₹${product.price}).`,
        'success'
      );
    }
  }
}
