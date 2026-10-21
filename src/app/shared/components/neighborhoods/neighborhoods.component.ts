import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Complaint, Neighborhood } from "@core/models";

interface NeighborhoodSummary {
    name: string;
    count: number;
}

@Component({
    selector: 'app-neighborhoods',
    standalone: false,
    styleUrl: './neighborhoods.component.css',
    template: `
        @for (neighborhood of filteredNeighborhoods; track neighborhood.neighborhood;) {
            <button class="neighborhood" (click)="sendNeighborhood(neighborhood.neighborhood)">
                <span>
                    {{ neighborhood.neighborhood }} - {{ neighborhood.total }} Denúncias
                </span>

                <span class="open"><i class="fa-solid fa-chevron-up fa-rotate-90" style="color: #242425;"></i></span>
            </button>
        }
    `
})
export class NeighbohoodComponent {
    @Input() filteredNeighborhoods: Neighborhood[] = [];
    @Output() ShowComplaints = new EventEmitter<string>

    sendNeighborhood(neighborhood: string) {
        this.ShowComplaints.emit(neighborhood)
    }
}