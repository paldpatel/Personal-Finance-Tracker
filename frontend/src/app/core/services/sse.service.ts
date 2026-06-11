import { Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';

export interface SseNotification {
  event: string;
  data: any;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class SseService {
  notifications = signal<SseNotification[]>([]);
  private eventSource: EventSource | null = null;

  constructor(private auth: AuthService) {}

  connect(): void {
    if (this.eventSource) return;
    const token = this.auth.accessToken;
    if (!token) return;

    this.eventSource = new EventSource(`http://localhost:3000/api/events?token=${token}`);

    this.eventSource.addEventListener('budget:exceeded', (e: MessageEvent) => {
      this.push('budget:exceeded', JSON.parse(e.data));
    });
    this.eventSource.addEventListener('transaction:created', (e: MessageEvent) => {
      this.push('transaction:created', JSON.parse(e.data));
    });
    this.eventSource.addEventListener('transactions:synced', (e: MessageEvent) => {
      this.push('transactions:synced', JSON.parse(e.data));
    });

    this.eventSource.onerror = () => {
      this.disconnect();
      setTimeout(() => this.connect(), 5000);
    };
  }

  disconnect(): void {
    this.eventSource?.close();
    this.eventSource = null;
  }

  private push(event: string, data: any): void {
    this.notifications.update(n => [{ event, data, timestamp: new Date() }, ...n].slice(0, 20));
  }

  clearNotifications(): void { this.notifications.set([]); }
}