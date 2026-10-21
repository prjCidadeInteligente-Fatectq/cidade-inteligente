import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { Complaint, ComplaintById, Neighborhood } from '@core/models';
import { GetComplaintsService } from "@core/services/complaints/get-complaints.service";

interface Priority {
    name: string;
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
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _getComplaints = inject(GetComplaintsService);

    complaintsAndNeighborhood: ComplaintById[] = [];
    complaints: Complaint[] = [];

    neighborhoods: Neighborhood[] = [];

    isModalOpen: boolean = false;
    activeMenuPriority: string | null = null;
    selectedNeighborhood: string = ''

    priorities: Priority[] = []

    ngOnInit(): void {
        this._getComplaints.getNeighborhoodsWithTotal().subscribe({
            next: (data) => {
                this.neighborhoods = data.complaintByNeighborhoodList;

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

                this._changeDetectorRef.markForCheck();
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
                this.complaints = data?.complaintsByNeighborhood;

                this._changeDetectorRef.markForCheck();
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
