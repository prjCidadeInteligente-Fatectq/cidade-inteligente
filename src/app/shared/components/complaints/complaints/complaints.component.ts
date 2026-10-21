import { Component, Input, OnInit } from "@angular/core";
import { Complaint } from "@core/models";

interface ComplaintStatus {
    status: string;
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
    @Input() filteredComplaints?: Complaint[] = [];

    complaint: Complaint | null = null;
    complaintToDelete: Complaint | null = null;
    isOptionsOpenId: string | null = null;
    selectedComplaintId: string | null = null;
    expandedCardIds = new Set<string>();
    complaintStatus: ComplaintStatus[] = [];

    ngOnInit(): void {
        this.complaintStatus = [
            {
                status: 'PENDENTE',
                backgroundColor: 'hsla(38, 92%, 50%, 0.15)',
                color: '#b45309'
            },
            {
                status: 'EM ANDAMENTO',
                backgroundColor: 'hsla(204, 65%, 50%, 0.15)',
                color: '#1e6fa5'
            },
            {
                status: 'CONCLUÍDA',
                backgroundColor: 'hsla(142, 71%, 45%, 0.15)',
                color: '#15803d'
            },
        ]
    }

    formatRegisterDate(registerDate: string): string {
        if (!registerDate) {
            return '';
        }

        const [year, month, day] = registerDate.slice(0, 10).split('-');

        return `${day}/${month}/${year}`;
    }

    getStatusStyle(status: string): { backgroundColor: string; color: string } {
        return this.complaintStatus.find(item => item.status === status)
            ?? { status, backgroundColor: 'transparent', color: 'inherit' };
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

    toggleShowOptions(id: string) {
        if (this.isOptionsOpenId === null){
            this.isOptionsOpenId = id;
        } else {
            this.isOptionsOpenId = null;
        }
    }

    handleOption(option: string, complaint: Complaint) {
        if (option === 'Editar') {
            this.ShowModal(complaint.id, complaint);
        } else if (option === 'Excluir') {
            this.complaintToDelete = complaint;
        }
    }

    ShowModal(id: string, complaint: Complaint) {
        this.selectedComplaintId = id;
        this.complaint = complaint;
    }

    DeleteComplaint(complaint: Complaint) {
        
    }

    CloseDeleteModal() {
        this.complaintToDelete = null;
    }

    SaveComplaint(updated: Complaint) {
        
    }

    CloseModal() {
        this.selectedComplaintId = null;
        this.complaint = null;
    }
}