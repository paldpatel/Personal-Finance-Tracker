import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../core/services/transaction.service';
import { DashboardData } from '../../core/models';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('donutCanvas') donutCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('trendCanvas') trendCanvas!: ElementRef<HTMLCanvasElement>;

  data: DashboardData | null = null;
  loading = true;
  selectedMonth = new Date().toISOString().slice(0, 7);
  private donutChart?: Chart;
  private trendChart?: Chart;

  constructor(private txnService: TransactionService) {}

  ngOnInit(): void { this.load(); }
  ngAfterViewInit(): void {}

  load(): void {
    this.loading = true;
    this.txnService.getDashboard(this.selectedMonth).subscribe({
      next: (data) => { this.data = data; this.loading = false; setTimeout(() => this.renderCharts(), 50); },
      error: () => { this.loading = false; }
    });
  }

  renderCharts(): void { this.renderDonut(); this.renderTrend(); }

  renderDonut(): void {
    if (!this.donutCanvas || !this.data?.spendingByCategory?.length) return;
    this.donutChart?.destroy();
    const ctx = this.donutCanvas.nativeElement.getContext('2d')!;
    this.donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.data.spendingByCategory.map(c => c.category_name),
        datasets: [{
          data: this.data.spendingByCategory.map(c => c.total),
          backgroundColor: this.data.spendingByCategory.map(c => c.category_color || '#6366f1'),
          borderWidth: 2, borderColor: '#fff'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '65%',
        plugins: { legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 } } } }
      }
    });
  }

  renderTrend(): void {
    if (!this.trendCanvas || !this.data?.monthlyTrend?.length) return;
    this.trendChart?.destroy();
    const months = [...new Set(this.data.monthlyTrend.map(t => t.month))].sort();
    const income = months.map(m => Number(this.data!.monthlyTrend.find(t => t.month === m && t.type === 'income')?.total || 0));
    const expense = months.map(m => Number(this.data!.monthlyTrend.find(t => t.month === m && t.type === 'expense')?.total || 0));

    const ctx = this.trendCanvas.nativeElement.getContext('2d')!;
    this.trendChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months.map(m => { const [y, mo] = m.split('-'); return new Date(Number(y), Number(mo)-1).toLocaleString('default', { month: 'short', year: '2-digit' }); }),
        datasets: [
          { label: 'Income', data: income, backgroundColor: '#22c55e', borderRadius: 4 },
          { label: 'Expenses', data: expense, backgroundColor: '#f43f5e', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true, ticks: { callback: v => '₹' + Number(v).toLocaleString() } } }
      }
    });
  }

  fmt(n: number): string {
    return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}