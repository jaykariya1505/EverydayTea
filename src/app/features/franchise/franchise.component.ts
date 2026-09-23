import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.scss'
})
export class FranchiseComponent {
  private toastService = inject(ToastService);

  formData = {
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    investmentBudget: '5-10Lakh',
    proposedLocation: 'mall',
    experience: ''
  };

  onSubmitApplication(event: Event): void {
    event.preventDefault();
    if (!this.formData.fullName || !this.formData.phone || !this.formData.email) return;

    this.toastService.show(
      '🤝 Franchise Application Received!',
      `Thank you ${this.formData.fullName}. Our EveryDay Tea franchise expansion manager will call you back at ${this.formData.phone}.`,
      'gold'
    );

    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      cityState: '',
      investmentBudget: '5-10Lakh',
      proposedLocation: 'mall',
      experience: ''
    };
  }
}
