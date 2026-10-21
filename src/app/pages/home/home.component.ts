import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Complaint } from '@core/models';
import { GetComplaintsService } from '@core/services/complaints/get-complaints.service';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _getComplaints = inject(GetComplaintsService);

  complaintsWithOldTimeRange: Complaint[] = [];
  isLoadingComplaints = true;

  ngOnInit(): void {
    this.loadComplaintsWithOldTimeRange();

    this._getComplaints.complaintsUpdated$.subscribe(() => this.loadComplaintsWithOldTimeRange());
  }

  private loadComplaintsWithOldTimeRange(): void {
    this.isLoadingComplaints = true;
    this._getComplaints.getComplaintsWithOldTimeRange().subscribe({
      next: (data) => {
        this.complaintsWithOldTimeRange = data.complaintsByNeighborhood;
        this.isLoadingComplaints = false;
        this._changeDetectorRef.markForCheck();
      },
      error: (error) => {
        this.isLoadingComplaints = false;
        this._changeDetectorRef.markForCheck();
        console.error(error)
      }
    });
  }

  OrderComplaints() {
    
  }
}
