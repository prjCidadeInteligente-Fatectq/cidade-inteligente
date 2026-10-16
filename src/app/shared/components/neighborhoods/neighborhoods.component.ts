import { Component, Input } from "@angular/core";
import { Complaint } from "@core/models";

interface NeighborhoodSummary {
    name: string;
    count: number;
}

@Component({
    selector: 'app-neighborhoods',
    standalone: false,
    styleUrl: './neighborhoods.component.css',
    templateUrl: './neighborhoods.component.html'
})
export class NeighbohoodComponent {
    @Input() filteredComplaints: Complaint[] = [];

    get uniqueNeighborhoods(): NeighborhoodSummary[] {
        const counts = new Map<string, number>();

        for (const complaint of this.filteredComplaints) {
            const name = complaint.neighborhood.name;
            counts.set(name, (counts.get(name) || 0) + 1);
        }

        return Array.from(counts, ([name, count]) => ({ name, count }));
    }
}