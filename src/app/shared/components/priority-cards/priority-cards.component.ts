import { Component, Input, OnInit } from "@angular/core";
import { Complaint, NeighborhoodPriority } from '@core/models';
import { complaints } from '@shared/data/complaints';

interface Priority {
    name: NeighborhoodPriority;
    color: string;
    quantity: number;
}

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
        },
        {
            name: 'MÉDIA',
            color: '#ffff24',

            quantity: this.filteredComplaints.filter(c => c.neighborhood.priority === 'MÉDIA').length
        },
        {
            name: 'BAIXA',
            color: '#45cc47',
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
    }

    OrderComplaints() {

    }
}
