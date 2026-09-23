import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-wholesale',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wholesale.component.html',
  styleUrl: './wholesale.component.scss'
})
export class WholesaleComponent {
  private toastService = inject(ToastService);

  // Bulk Calculator Inputs
  readonly bulkWeightKg = signal<number>(25);
  readonly selectedBlend = signal<'original' | 'gold' | 'masala'>('original');

  // Base prices per kg
  readonly basePrices = {
    original: 360, // ₹360/kg base
    gold: 520,     // ₹520/kg base
    masala: 440    // ₹440/kg base
  };

  readonly bulkQuote = computed(() => {
    const kg = this.bulkWeightKg();
    const base = this.basePrices[this.selectedBlend()];
    
    // Tier discount
    let discountPercent = 0;
    if (kg >= 100) discountPercent = 0.20; // 20% off
    else if (kg >= 50) discountPercent = 0.15; // 15% off
    else if (kg >= 25) discountPercent = 0.10; // 10% off

    const pricePerKg = Math.round(base * (1 - discountPercent));
    const total = pricePerKg * kg;

    return {
      kg,
      pricePerKg,
      discountPercent: Math.round(discountPercent * 100),
      total
    };
  });

  // B2B Form Data
  formData = {
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    gstin: '',
    businessType: 'hotel',
    monthlyVolume: '25-50 kg',
    message: ''
  };

  onSubmitInquiry(event: Event): void {
    event.preventDefault();
    if (!this.formData.businessName || !this.formData.contactName || !this.formData.email) return;

    this.toastService.show(
      '💼 B2B Inquiry Submitted',
      `Thank you ${this.formData.contactName} (${this.formData.businessName}). Our Assam wholesale manager will send your sample pack & formal quote within 12 hours.`,
      'gold'
    );

    this.formData = {
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      gstin: '',
      businessType: 'hotel',
      monthlyVolume: '25-50 kg',
      message: ''
    };
  }
}
