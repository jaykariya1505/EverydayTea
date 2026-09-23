import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../../core/services/toast.service';

interface InstaPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
}

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-feed.component.html',
  styleUrl: './instagram-feed.component.scss'
})
export class InstagramFeedComponent {
  private toastService = inject(ToastService);

  readonly posts: InstaPost[] = [
    {
      id: 'p1',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
      caption: 'Misty morning chai in Upper Assam garden estates ☕🍃',
      likes: '2.4k'
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      caption: 'EveryDay Gold — Long leaf Assam Orthodox meets strong CTC blend ✨',
      likes: '1.8k'
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
      caption: 'Har Subah, Har Chai — The perfect start to an Indian morning ☀️',
      likes: '3.1k'
    },
    {
      id: 'p4',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80',
      caption: 'Crushed elaichi & dalchini brewing in authentic masala chai 🌿',
      likes: '2.9k'
    },
    {
      id: 'p5',
      image: 'https://images.unsplash.com/photo-1563822249510-04678c787dd2?auto=format&fit=crop&w=600&q=80',
      caption: 'Estate fresh packing — From Assam directly to your tea tin 📦',
      likes: '1.5k'
    },
    {
      id: 'p6',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80',
      caption: 'Whole organic Tulsi Green Tea for daily evening refresh 🍵',
      likes: '2.2k'
    }
  ];

  onFollow(): void {
    this.toastService.show(
      '📸 Instagram @everydaytea',
      'Opening @everydaytea official Instagram profile...',
      'info'
    );
  }
}
