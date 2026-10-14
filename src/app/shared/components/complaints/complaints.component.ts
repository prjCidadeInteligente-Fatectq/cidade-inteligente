import { Component, Input } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-complaints',
    standalone: false,
    styleUrl: './complaints.component.css',
    templateUrl: './complaints.component.html',
})
export class ComplaintsComponent {
    @Input() complaints: Complaint[] = [];

    expandedCardId: number | null = null;

    toggleExpand(id: number) {
        if (this.expandedCardId === id) {
            this.expandedCardId = null;
        } else {
            this.expandedCardId = id;
        }
    }
}