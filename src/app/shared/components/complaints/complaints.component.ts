import { Component, Input, OnInit } from "@angular/core";
import { Complaint, ComplaintStatusType } from "@core/models";


interface ComplaintStatus {
    status: ComplaintStatusType;
    backgroundColor?: string;
    color?: string;
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

    complaintStatus: ComplaintStatus[] = [];

    ngOnInit(): void {
        this.complaintStatus = [
            {
                status: 'PENDENTE',
                backgroundColor: '#fef3c7',
                color: '#92400e'
            },
            {
                status: 'EM ANDAMENTO',
                backgroundColor: '#2d8fd18c',
                color: '#206999'
            },
        ]
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