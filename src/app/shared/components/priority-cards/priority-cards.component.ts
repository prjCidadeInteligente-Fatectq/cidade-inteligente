import { Component, OnInit } from "@angular/core";
import { Complaint, ComplaintPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';

interface Priority {
    name: ComplaintPriority;
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
            quantity: this.complaints.filter(c => c.priority === 'ALTA' && c.complaintStatus !== 'CONCLUÍDA').length
        },
        {
            name: 'MÉDIA',
            color: '#ffff24',
            quantity: this.complaints.filter(c => c.priority === 'MÉDIA' && c.complaintStatus !== 'CONCLUÍDA').length
        },
        {
            name: 'BAIXA',
            color: '#45cc47',
            quantity: this.complaints.filter(c => c.priority === 'BAIXA' && c.complaintStatus !== 'CONCLUÍDA').length
        }
    ];

    ngOnInit(): void {
        
    }
}
