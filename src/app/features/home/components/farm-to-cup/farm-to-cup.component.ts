import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessStep } from '../../../../core/models/tea.models';

@Component({
  selector: 'app-farm-to-cup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farm-to-cup.component.html',
  styleUrl: './farm-to-cup.component.scss'
})
export class FarmToCupComponent {
  readonly steps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: 'Assam Tea Gardens',
      description: 'Nurtured in the nutrient-rich soils of Upper Assam along the Brahmaputra river valley.',
      iconSvg: `<path d="M12 21V11M12 11C10 7 6 7 6 7s0 5 6 4M12 11c2-4 6-4 6-4s0 5-6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 21h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
    },
    {
      stepNumber: 2,
      title: 'Hand-Picked Leaves',
      description: 'Master tea pluckers hand-select tender tea leaves & buds at peak morning freshness.',
      iconSvg: `<path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2"/><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/>`
    },
    {
      stepNumber: 3,
      title: 'Natural Processing',
      description: 'Withered, rolled, and oxidized under expert thermal control to lock in natural leaf strength.',
      iconSvg: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
    },
    {
      stepNumber: 4,
      title: 'Rigorous Quality Check',
      description: 'Every batch undergoes cupping tests for deep amber color, rich maltiness, and aroma.',
      iconSvg: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    {
      stepNumber: 5,
      title: 'Freshly Delivered',
      description: 'Vacuum-sealed at the estate source and shipped straight to your nearest kitchen pantry.',
      iconSvg: `<path d="M20 8L12 13L4 8L12 3L20 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 8V16L12 21V13L4 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M20 8V16L12 21V13L20 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`
    }
  ];
}
