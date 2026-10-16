import { Component, Input, OnInit } from "@angular/core";
import { Complaint } from "@core/models";


interface ComplaintStatus {
    backgroundColor: string;
    color: string;
}

@Component({
    selector: 'app-complaints',
    standalone: false,
    styleUrl: './complaints.component.css',
    templateUrl: './complaints.component.html',
})
export class ComplaintsComponent implements OnInit {
    @Input() filteredComplaints: Complaint[] = [];

    expandedCardIds = new Set<string>();

    ngOnInit(): void {
        
    }

    isExpanded(id: string): boolean {
        return this.expandedCardIds.has(id);
    }

    toggleExpand(id: string) {
        if (this.expandedCardIds.has(id)) {
            this.expandedCardIds.delete(id);
        } else {
            this.expandedCardIds.add(id);
        }
        this.expandedCardIds = new Set(this.expandedCardIds);
    }
}