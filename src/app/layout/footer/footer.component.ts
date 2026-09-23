import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WordmarkLogoComponent } from '../../shared/components/wordmark-logo/wordmark-logo.component';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, WordmarkLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private toastService = inject(ToastService);
  currentYear = new Date().getFullYear();
  newsletterEmail = '';

  onSubscribe(event: Event): void {
    event.preventDefault();
    this.toastService.show(
      '🍵 Welcome to the EveryDay Family!',
      'Thank you for subscribing to EveryDay Tea updates & offers.',
      'success'
    );
  }
}
