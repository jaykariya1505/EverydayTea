import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconSvg: string;
  highlightText: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  readonly benefits: BenefitCard[] = [
    {
      id: 'organic',
      title: '100% Organic Assam Tea',
      highlightText: 'Certified Pure',
      description: 'Grown naturally in the fertile soil of Upper Assam tea gardens without synthetic chemical pesticides.',
      iconSvg: `<path d="M12 2C6.5 2 3 7 3 13.5C3 18.5 7 21.5 12 22C17 21.5 21 18.5 21 13.5C21 7 17.5 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 22V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
    },
    {
      id: 'additives',
      title: 'No Artificial Additives',
      highlightText: '100% Natural',
      description: 'Zero artificial colors, synthetic aroma, or preservative chemicals — just genuine, unadulterated tea strength.',
      iconSvg: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    {
      id: 'pricing',
      title: 'Affordable Everyday Pricing',
      highlightText: 'Honest Value',
      description: 'Direct-from-estate sourcing eliminates middleman markups so top-tier chai remains accessible for every home.',
      iconSvg: `<rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>`
    },
    {
      id: 'trusted',
      title: 'Trusted by Indian Households',
      highlightText: '1,00,000+ Families',
      description: 'A morning staple across daily tea drinkers who value consistency, rich color, and satisfying kadak brew.',
      iconSvg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/>`
    }
  ];
}
