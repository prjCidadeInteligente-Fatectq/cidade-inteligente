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

    expandedCardId: string | null = null;

    ngOnInit(): void {
        
    }

    toggleExpand(id: string) {
        if (this.expandedCardId === id) {
            this.expandedCardId = null;
        } else {
            this.expandedCardId = id;
        }
    }
}