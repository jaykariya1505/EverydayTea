import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../core/models/tea.models';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  cartService = inject(CartService);

  readonly searchQuery = signal<string>('');
  readonly selectedCategory = signal<string>('all');
  readonly sortBy = signal<string>('featured');
  readonly selectedProduct = signal<Product | null>(null);

  readonly allProducts: Product[] = [
    {
      id: 'everyday-original',
      name: 'EveryDay Original Assam Tea',
      tagline: 'Kadak & Refreshing Everyday Morning Chai',
      price: 249,
      originalPrice: 299,
      weight: '500g Pack',
      rating: 4.9,
      reviewsCount: 1280,
      badge: 'Bestseller',
      isGold: false,
      category: 'original',
      origin: 'Upper Assam Valley Estate',
      brewingTime: '3-4 mins in boiling milk & water',
      ingredients: '100% Pure Organic Assam CTC Tea Leaves',
      description: 'Hand-picked organic Assam CTC tea leaves yielding a rich golden brew with strong aroma and bold strength for your daily morning family chai.',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-gold',
      name: 'EveryDay Gold Premium Reserve',
      subTitle: 'Premium Orthodox & Rich Golden Leaf Blend',
      tagline: 'Extra Strength & Royal Assam Aroma',
      price: 349,
      originalPrice: 399,
      weight: '500g Tin Pack',
      rating: 5.0,
      reviewsCount: 940,
      badge: 'EveryDay Gold Line',
      isGold: true,
      category: 'gold',
      origin: 'Single Estate Assam Orthodox',
      brewingTime: '4 mins brewing time',
      ingredients: 'Assam Orthodox Long-Leaf (30%) + High-Grade CTC (70%)',
      description: 'Our signature sub-brand blend combining long-leaf Assam Orthodox tea with strong CTC for an elevated everyday luxury and deep royal maltiness.',
      image: 'https://images.unsplash.com/photo-1563822249510-04678c787dd2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-masala',
      name: 'EveryDay Masala Chai Special',
      tagline: 'Infused with Real Elaichi, Dalchini & Laung',
      price: 299,
      originalPrice: 349,
      weight: '250g Pack',
      rating: 4.8,
      reviewsCount: 620,
      badge: 'Spiced Special',
      isGold: false,
      category: 'masala',
      origin: 'Assam Estate & Kerala Spice Gardens',
      brewingTime: '4 mins simmer with milk & ginger',
      ingredients: 'Assam Tea, Green Cardamom, Cinnamon, Clove, Black Pepper, Ginger',
      description: 'Authentic organic Assam tea blended with coarsely crushed natural spices for a warming, aromatic, health-boosting daily cup.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-green',
      name: 'EveryDay Tulsi Green Tea',
      tagline: 'Whole Leaf Organic Detox & Antioxidants',
      price: 329,
      originalPrice: 379,
      weight: '250g Tin Pack',
      rating: 4.9,
      reviewsCount: 410,
      badge: 'Organic Health',
      isGold: false,
      category: 'green',
      origin: 'Assam Organic Highlands',
      brewingTime: '2-3 mins in 85°C water',
      ingredients: 'Whole Leaf Organic Green Tea, Rama Tulsi, Krishna Tulsi, Vana Tulsi',
      description: 'Pure whole leaf unfermented green tea paired with organic Indian Tulsi leaves for daily immunity, stress relief, and metabolism.',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-cardamom',
      name: 'EveryDay Elaichi Special Chai',
      tagline: 'Fragrant Green Cardamom Infused Tea',
      price: 279,
      originalPrice: 319,
      weight: '250g Pack',
      rating: 4.7,
      reviewsCount: 380,
      badge: 'Flavor Favorite',
      isGold: false,
      category: 'masala',
      origin: 'Assam Estates & Idukki Cardamom',
      brewingTime: '3-4 mins simmer',
      ingredients: 'Assam CTC Tea, Crushed Idukki Green Cardamom Pods',
      description: 'Refreshing daily morning tea infused with authentic green cardamom pods from Kerala for an invigorating floral spice aroma.',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'everyday-herbal-mulethi',
      name: 'EveryDay Mulethi & Ginger Herbal',
      tagline: 'Soothing Throat Care & Caffeine-Free Brew',
      price: 359,
      originalPrice: 399,
      weight: '200g Tin Pack',
      rating: 4.8,
      reviewsCount: 290,
      badge: 'Ayurvedic Care',
      isGold: false,
      category: 'herbal',
      origin: 'Ayurvedic Organic Herb Gardens',
      brewingTime: '5 mins steep in hot water',
      ingredients: 'Mulethi (Licorice Root), Sun-dried Ginger, Tulsi, Cinnamon, Saunf',
      description: 'Naturally sweet herbal infusion packed with Ayurvedic herbs for throat comfort, digestion, and evening relaxation.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  readonly filteredProducts = computed(() => {
    let list = [...this.allProducts];
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    const sort = this.sortBy();

    // Category filter
    if (cat === 'gold') {
      list = list.filter(p => p.isGold);
    } else if (cat !== 'all') {
      list = list.filter(p => p.category === cat);
    }

    // Search query filter
    if (query) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  });

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  openProductModal(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeProductModal(): void {
    this.selectedProduct.set(null);
  }

  addToCart(product: Product, event?: Event): void {
    if (event) event.stopPropagation();
    this.cartService.addItem(product, 1);
  }
}
