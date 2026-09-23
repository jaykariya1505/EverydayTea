import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private toastService = inject(ToastService);

  formData = {
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    message: ''
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.toastService.show(
      '📨 Message Sent Successfully!',
      `Thank you ${this.formData.name}. Our EveryDay Tea support team will respond to ${this.formData.email} within 24 hours.`,
      'success'
    );

    this.formData = {
      name: '',
      email: '',
      phone: '',
      topic: 'general',
      message: ''
    };
  }
}
