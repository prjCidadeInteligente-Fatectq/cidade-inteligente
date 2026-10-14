import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Complaint } from '@core/models';

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
export class ComplaintCounterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() complaints: Complaint[] = [];

  @ViewChild('pizzaChart')
  pizzaChart!: ElementRef<HTMLCanvasElement>;

  chart?: Chart;

  chartItems: ChartItem[] = [];

  totalComplaints: number = 0;
  
  ngOnInit(): void {
    this.totalComplaints = this.complaints.length;

    this.chartItems = [
      { label: 'Pendentes', value: this.complaints.filter(c => c.complaintStatus === 'PENDENTE').length, color: '#F59E0B' },
      { label: 'Obras em andamento', value: this.complaints.filter(c => c.complaintStatus === 'EM_ANDAMENTO').length, color: '#2d8fd1' },
      { label: 'Obras concluídas', value: this.complaints.filter(c => c.complaintStatus === 'CONCLUIDA').length, color: '#22C55E' }
    ]
  }

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
