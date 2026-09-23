import { Injectable, signal } from '@angular/core';
import { ToastMessage } from '../models/tea.models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  readonly toasts = signal<ToastMessage[]>([]);

  show(title: string, message: string, type: 'success' | 'info' | 'gold' = 'success', durationMs = 3500): void {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, title, message, type };
    
    this.toasts.update(current => [...current, newToast]);

    setTimeout(() => {
      this.remove(id);
    }, durationMs);
  }

  remove(id: string): void {
    this.toasts.update(current => current.filter(t => t.id !== id));
  }
}
