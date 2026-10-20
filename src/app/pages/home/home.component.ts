import { Component } from '@angular/core';
import { complaints } from '@shared/data/complaints'

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  complaints = complaints;

  OrderComplaints() {
    
  }
}