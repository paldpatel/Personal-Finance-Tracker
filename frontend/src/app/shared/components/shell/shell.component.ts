import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { SseService, SseNotification } from '../../../core/services/sse.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  sidebarOpen = false;
  showNotifications = false;

  constructor(public auth: AuthService, public sse: SseService) {}

  ngOnInit(): void { this.sse.connect(); }
  ngOnDestroy(): void { this.sse.disconnect(); }

  get user() { return this.auth.currentUser(); }
  get notifications() { return this.sse.notifications(); }
  get isOnline() { return navigator.onLine; }

  logout(): void { this.auth.logout(); }
  clearNotifications(): void { this.sse.clearNotifications(); }

  getNotificationMessage(n: SseNotification): string {
    if (n.event === 'budget:exceeded')
      return `⚠️ Budget exceeded: ${n.data.categoryName} (₹${n.data.spent} / ₹${n.data.limit})`;
    if (n.event === 'transactions:synced')
      return `✅ ${n.data.count} offline transaction(s) synced`;
    return n.event;
  }
}