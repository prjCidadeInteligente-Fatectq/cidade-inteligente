import { Component, OnInit } from "@angular/core";
import { Complaint, NeighborhoodPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';

interface Priority {
    name: NeighborhoodPriority;
    color: string;
    quantity: number;
}

@Component({
    selector: 'app-priority-cards',
    standalone: false,
    styleUrl: './priority-cards.component.css',
    templateUrl: './priority-cards.component.html',
})
export class PriorityCardsComponent implements OnInit {
    complaints: Complaint[] = complaints;

    priorities: Priority[] = [
        {
            name: 'ALTA',
            color: '#f83838',
            quantity: this.complaints.filter(c => c.neighborhood.priority === 'ALTA').length
        },
        {
            name: 'MÉDIA',
            color: '#ffff24',
            quantity: this.complaints.filter(c => c.neighborhood.priority === 'MÉDIA').length
        },
        {
            name: 'BAIXA',
            color: '#45cc47',
            quantity: this.complaints.filter(c => c.neighborhood.priority === 'BAIXA').length
        }
    ];

    ngOnInit(): void {
        
    }
}
