import { Component, inject, Input, OnInit } from "@angular/core";
import { Complaint, ComplaintById, Neighborhood, NeighborhoodPriority } from '@core/models';
import { GetComplaintsService } from "@core/services/complaints/get-complaints.service";

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
    private _getComplaints = inject(GetComplaintsService);

    complaintsAndNeighborhood: ComplaintById[] = [];
    //complaints: Complaint

    neighborhoods: Neighborhood[] = [];

    isModalOpen: boolean = false;
    activeMenuPriority: string | null = null;
    selectedNeighborhood: string = ''

    priorities: Priority[] = []

    ngOnInit(): void {
        this._getComplaints.getNeighborhoodsWithTotal().subscribe({
            next: (data) => {
                this.neighborhoods = data;
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    OpenModal(neighborhood: string) {
        this.selectedNeighborhood = neighborhood;
        this.isModalOpen = true;

        this._getComplaints.getComplaintsByNeighborhood(this.selectedNeighborhood).subscribe({
            next: (data) => {
                //this.complaints = data;

                this.priorities = [
                    {
                        name: 'ALTA',
                        color: '#d23131',
                        quantity: this.neighborhoods.filter(n => n.priority === 'ALTA').length
                    },
                    {
                        name: 'MÉDIA',
                        color: '#edda09',
                        quantity: this.neighborhoods.filter(n => n.priority === 'MÉDIA').length
                    },
                    {
                        name: 'BAIXA',
                        color: '#3aad3c',
                        quantity: this.neighborhoods.filter(n => n.priority === 'BAIXA').length
                    }
                ];
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    CloseModal() {
        this.isModalOpen = false;
    }

    toggleMenu(priorityName: string, isMenuOpen: boolean) {
        this.activeMenuPriority = isMenuOpen ? priorityName : null;
    }

    OrderComplaints(option: string) {
        
    }
}
