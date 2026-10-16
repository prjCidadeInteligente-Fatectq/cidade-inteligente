import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Complaint } from "@core/models";

interface NeighborhoodSummary {
    name: string;
    count: number;
}

@Component({
    selector: 'app-neighborhoods',
    standalone: false,
    styleUrl: './neighborhoods.component.css',
    template: `
        @for (item of uniqueNeighborhoods; track item.name;) {
            <button class="neighborhood" (click)="sendNeighborhood(item.name)">
                <span>
                    {{ item.name }}
                    -
                    {{ item.count }} Denúncias
                </span>

                <span class="open"><i class="fa-solid fa-chevron-up fa-rotate-90" style="color: #242425;"></i></span>
            </button>
        }
    `
})
export class NeighbohoodComponent {
    @Input() filteredComplaints: Complaint[] = [];
    @Output() ShowComplaints = new EventEmitter<string>

    get uniqueNeighborhoods(): NeighborhoodSummary[] {
        const counts = new Map<string, number>();

        for (const complaint of this.filteredComplaints) {
            const name = complaint.neighborhood.name;
            counts.set(name, (counts.get(name) || 0) + 1);
        }

        return Array.from(counts, ([name, count]) => ({ name, count }));
    }

    sendNeighborhood(neighborhood: string) {
        this.ShowComplaints.emit(neighborhood)
    }
}