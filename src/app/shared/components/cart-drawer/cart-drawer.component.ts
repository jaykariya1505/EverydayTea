import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss'
})
export class CartDrawerComponent {
  cartService = inject(CartService);
  private toastService = inject(ToastService);

  onCheckout(): void {
    if (this.cartService.items().length === 0) return;
    
    this.cartService.closeCart();
    this.toastService.show(
      '☕ Order Demo Checkout',
      `Thank you! Your demo order of ₹${this.cartService.subtotal()} has been placed successfully.`,
      'success'
    );
    this.cartService.clearCart();
  }
}
