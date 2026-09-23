import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaqItem } from '../../core/models/tea.models';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly activeCategory = signal<string>('all');
  readonly expandedIds = signal<Set<string>>(new Set(['faq-1', 'faq-4']));

  readonly faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What makes EveryDay Tea 100% organic and pesticide-free?',
      answer: 'Our tea leaves are harvested exclusively from certified organic tea gardens in Upper Assam. We do not use synthetic fertilizers, chemical pesticides, or artificial spray additives during growth, harvesting, or processing.',
      category: 'quality'
    },
    {
      id: 'faq-2',
      question: 'What is the difference between EveryDay Original and EveryDay Gold?',
      answer: 'EveryDay Original is our flagship 100% organic Assam CTC tea, formulated for daily, strong milk chai in every Indian household. EveryDay Gold is a premium sub-brand reserve that blends long-leaf Assam Orthodox tea with rich CTC leaves for an extra royal maltiness and deeper golden liquor.',
      category: 'gold'
    },
    {
      id: 'faq-3',
      question: 'How long does shipping take across India?',
      answer: 'We dispatch orders directly from our estate packaging facility within 24 hours. Delivery typically takes 2–4 business days for metro cities (Delhi, Mumbai, Bengaluru, Kolkata, Chennai) and 3–6 business days for tier-2/tier-3 locations across India.',
      category: 'orders'
    },
    {
      id: 'faq-4',
      question: 'Is there a minimum order requirement for free shipping?',
      answer: 'Yes! All orders above ₹499 qualify for FREE doorstep delivery anywhere in India. Orders below ₹499 carry a flat nominal delivery fee of ₹49.',
      category: 'orders'
    },
    {
      id: 'faq-5',
      question: 'Do you offer bulk purchasing or wholesale rates for offices & cafes?',
      answer: 'Absolutely! We offer dedicated bulk packaging (5kg, 10kg, 25kg bags) and wholesale rates for hotels, restaurants, corporate offices, and tea distributors. Please visit our Wholesale B2B page to submit an inquiry.',
      category: 'wholesale'
    },
    {
      id: 'faq-6',
      question: 'How should I store my EveryDay Tea to retain freshness?',
      answer: 'Keep your tea in an airtight container (or inside the EveryDay Gold tin) stored in a cool, dry pantry away from direct sunlight and strong spice odors. Under proper storage, our tea retains its garden-fresh aroma for 12 months.',
      category: 'quality'
    },
    {
      id: 'faq-7',
      question: 'Can I partner with EveryDay Tea to open a retail franchise?',
      answer: 'Yes, we are expanding our retail distribution and franchise footprint across India. You can apply via our Franchise page to learn more about investment tiers and partner benefits.',
      category: 'wholesale'
    }
  ];

  readonly filteredFaqs = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.faqs;
    return this.faqs.filter(f => f.category === cat);
  });

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  toggleFaq(id: string): void {
    this.expandedIds.update(currentSet => {
      const newSet = new Set(currentSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  isExpanded(id: string): boolean {
    return this.expandedIds().has(id);
  }
}
