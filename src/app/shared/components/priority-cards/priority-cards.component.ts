<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { Complaint, ComplaintPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';
=======
import { Component, Input, OnInit } from "@angular/core";
import { Complaint, NeighborhoodPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';

interface Priority {
    name: NeighborhoodPriority;
    color: string;
    quantity: number;
}
>>>>>>> pull-rebase

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
<<<<<<< HEAD
    complaints: Complaint[] = complaints;

    priorities: Priority[] = [
        {
            name: 'ALTA',
            color: '#f83838',
            quantity: this.complaints.filter(c => c.priority === 'ALTA' && c.complaintStatus !== 'CONCLUÍDA').length
=======
    @Input() filteredComplaints: Complaint[] = [];

    isModalOpen: boolean = false;
    selectedNeighborhood: string = ''

    priorities: Priority[] = []

    ngOnInit(): void {
        this.priorities = [
        {
            name: 'ALTA',
            color: '#f83838',
            quantity: this.filteredComplaints.filter(c => c.neighborhood.priority === 'ALTA').length
>>>>>>> pull-rebase
        },
        {
            name: 'MÉDIA',
            color: '#ffff24',
<<<<<<< HEAD
            quantity: this.complaints.filter(c => c.priority === 'MÉDIA' && c.complaintStatus !== 'CONCLUÍDA').length
=======
            quantity: this.filteredComplaints.filter(c => c.neighborhood.priority === 'MÉDIA').length
>>>>>>> pull-rebase
        },
        {
            name: 'BAIXA',
            color: '#45cc47',
<<<<<<< HEAD
            quantity: this.complaints.filter(c => c.priority === 'BAIXA' && c.complaintStatus !== 'CONCLUÍDA').length
        }
    ];

    ngOnInit(): void {
        
=======
            quantity: this.filteredComplaints.filter(c => c.neighborhood.priority === 'BAIXA').length
        }
    ];
    }

    OpenModal(neighborhood: string) {
        this.selectedNeighborhood = neighborhood;
        this.isModalOpen = true
    }

    CloseModal() {
        this.isModalOpen = false;
>>>>>>> pull-rebase
    }
}
