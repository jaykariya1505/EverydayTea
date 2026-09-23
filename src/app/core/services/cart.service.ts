import { Injectable, computed, signal, inject } from '@angular/core';
import { CartItem, Product } from '../models/tea.models';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private toastService = inject(ToastService);

  readonly items = signal<CartItem[]>([
    {
      product: {
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
        description: 'Hand-picked organic Assam CTC tea leaves yielding a rich golden brew with strong aroma.',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80'
      },
      quantity: 1
    }
  ]);

  readonly isDrawerOpen = signal<boolean>(false);

  readonly totalItems = computed(() => 
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly subtotal = computed(() => 
    this.items().reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  );

  readonly freeShippingThreshold = 499;

  readonly freeShippingRemaining = computed(() => {
    const rem = this.freeShippingThreshold - this.subtotal();
    return rem > 0 ? rem : 0;
  });

  readonly freeShippingPercent = computed(() => {
    const percent = (this.subtotal() / this.freeShippingThreshold) * 100;
    return percent > 100 ? 100 : percent;
  });

  openCart(): void {
    this.isDrawerOpen.set(true);
  }

  closeCart(): void {
    this.isDrawerOpen.set(false);
  }

  toggleCart(): void {
    this.isDrawerOpen.update(val => !val);
  }

  addItem(product: Product, quantity = 1): void {
    this.items.update(currentItems => {
      const existingIndex = currentItems.findIndex(i => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...currentItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...currentItems, { product, quantity }];
      }
    });

    if (product.isGold) {
      this.toastService.show(
        `✨ ${product.name}`,
        `Added to your cart. Premium EveryDay Gold selection!`,
        'gold'
      );
    } else {
      this.toastService.show(
        `🍵 ${product.name}`,
        `Added to your cart.`,
        'success'
      );
    }

    this.openCart();
  }

  updateQuantity(productId: string, delta: number): void {
    this.items.update(currentItems => {
      return currentItems
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  }

  removeItem(productId: string): void {
    this.items.update(currentItems => currentItems.filter(i => i.product.id !== productId));
  }

  clearCart(): void {
    this.items.set([]);
  }
}
