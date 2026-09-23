import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wordmark-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordmark-logo.component.html',
  styleUrl: './wordmark-logo.component.scss'
})
export class WordmarkLogoComponent {
  @Input() variant: 'default' | 'gold' | 'light' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showTagline = false;
}
