import { ChangeDetectorRef, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ComplaintStatusQuant, GetComplaintsService } from '@core/services/complaints/get-complaints.service';

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
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _getComplaints = inject(GetComplaintsService);  
  
  @ViewChild('pizzaChart')
  pizzaChart!: ElementRef<HTMLCanvasElement>;

  chart?: Chart;

  chartItems: ChartItem[] = [];

  totalComplaints: number = 0;
  
  complaintStatusQuant: ComplaintStatusQuant | null = null;

  ngOnInit(): void {
    this._getComplaints.getTotalComplaints().subscribe({
      next: (data) => {
        this.complaintStatusQuant = data;
        
        this.chartItems = [
          { label: 'Pendentes',
            value: this.complaintStatusQuant?.totalPending,
            color: '#F59E0B' 
          },
          {
            label: 'Obras em andamento',
            value: this.complaintStatusQuant?.totalProgress,
            color: '#2d8fd1'
          },
          {
            label: 'Obras concluídas',
            value: this.complaintStatusQuant?.totalComplet,
            color: '#22C55E'
          }
        ]

        this.totalComplaints = this.complaintStatusQuant?.totalPending + 
        this.complaintStatusQuant?.totalProgress + 
        this.complaintStatusQuant?.totalComplet;

        this._changeDetectorRef.markForCheck();

        this.CreateChart();
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  CreateChart() {
  if (!this.pizzaChart) return;

  this.chart?.destroy();

  this.chart = new Chart(this.pizzaChart.nativeElement, {
    type: 'pie',
    data: {
      labels: this.chartItems.map(item => {
        const percentage = this.totalComplaints > 0
          ? Math.round(item.value / this.totalComplaints * 100)
          : 0;

        return `${item.label} (${percentage}%)`;
      }),
      datasets: [{
        data: this.chartItems.map(item => item.value),
        backgroundColor: this.chartItems.map(item => item.color),
        borderColor: 'transparent'
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

  ngAfterViewInit(): void {
    if (this.chartItems.length > 0) {
    this.CreateChart();
  }
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
