import { Component, inject, OnInit } from '@angular/core';
import { Complaint } from '@core/models';
import { GetComplaintsService } from '@core/services/complaints/get-complaints.service';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  private _getComplaints = inject(GetComplaintsService);

  complaintsWithOldTimeRange: Complaint[] = [];

  ngOnInit(): void {
    this._getComplaints.getComplaintsWithOldTimeRange().subscribe({
      next: (data) => {
        this.complaintsWithOldTimeRange = data;
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  OrderComplaints() {
    
  }
}