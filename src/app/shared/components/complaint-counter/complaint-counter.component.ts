import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface ChartItem {
  label: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-complaint-counter',
  standalone: false,
  styleUrl: './complaint-counter.component.css',
  templateUrl: './complaint-counter.component.html',
})
export class ComplaintCounterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pizzaChart')
  pizzaChart!: ElementRef<HTMLCanvasElement>;

  chart?: Chart;

  chartItems: ChartItem[] = [
    { label: 'Pendentes', value: 12, color: '#F59E0B' },
    { label: 'Obras em andamento', value: 8, color: '#2d8fd1' },
    { label: 'Obras concluídas', value: 10, color: '#22C55E' }
  ];

  totalComplaints: number = this.chartItems.reduce((sum, item) => sum + item.value, 0);

  ngAfterViewInit(): void {
    this.chart = new Chart(this.pizzaChart.nativeElement, {
      type: 'pie',

      data: {
        labels: this.chartItems.map(item => `${item.label} (${Math.round(item.value / this.totalComplaints * 100)}%)`),
        datasets: [{
          data: this.chartItems.map(item => item.value),
          backgroundColor: this.chartItems.map(item => item.color),
          borderColor: 'transparent',
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const item = this.chartItems[context.dataIndex];
                return `${item.label}: ${item.value}`;
              }
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
