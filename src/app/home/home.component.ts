import { Component } from '@angular/core';
import { Complaint } from '@core/models';
import { complaints } from '@shared/data/complaints';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  complaintsList: Complaint[] = complaints;
}