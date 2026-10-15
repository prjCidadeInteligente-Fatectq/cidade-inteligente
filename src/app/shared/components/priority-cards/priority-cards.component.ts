import { Component, OnInit } from "@angular/core";
import { Complaint, ComplaintPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';

@Component({
    selector: 'app-priority-cards',
    standalone: false,
    styleUrl: './priority-cards.component.css',
    templateUrl: './priority-cards.component.html',
})
export class PriorityCardsComponent implements OnInit {
    complaints: Complaint[] = complaints;

    priorities: ComplaintPriority[] = [];

    ngOnInit(): void {
        
    }
}
