import { ChangeDetectorRef, Component, inject, Input, OnInit } from "@angular/core";
import { Complaint } from "@core/models";
import { GetComplaintsService, UpdateComplaintRequest } from "@core/services/complaints/get-complaints.service";

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
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _getComplaints = inject(GetComplaintsService);

    @Input() filteredComplaints?: Complaint[] = [];

    complaint: Complaint | null = null;
    isLoadingEditComplaint = false;
    isSavingComplaint = false;
    complaintToDelete: Complaint | null = null;
    isOptionsOpenId: string | null = null;
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

    handleOption(option: string, id: string) {
        if (option !== 'Editar') {
            return;
        }

        this.isLoadingEditComplaint = true;
        this._changeDetectorRef.markForCheck();

        this._getComplaints.getComplaintById(id).subscribe({
            next: (data) => {
                this.complaint = data;
                this.isLoadingEditComplaint = false;
                this._changeDetectorRef.markForCheck();
            },
            error: (error) => {
                this.isLoadingEditComplaint = false;
                this._changeDetectorRef.markForCheck();
                console.error(error)
            }
        });
    }

    CloseDeleteModal() {
        this.complaintToDelete = null;
    }

    SaveComplaint(updatedComplaint: Complaint) {
        if (this.isSavingComplaint) {
            return;
        }

        const request: UpdateComplaintRequest = {
            id: updatedComplaint.id,
            problem: updatedComplaint.problem,
            street: updatedComplaint.street,
            description: updatedComplaint.description,
            status: updatedComplaint.status,
            neighborhood: updatedComplaint.neighborhood
        };

        this.isSavingComplaint = true;
        this._changeDetectorRef.markForCheck();

        this._getComplaints.updateComplaint(request).subscribe({
            next: () => {
                this.filteredComplaints = (this.filteredComplaints ?? []).map((complaint) =>
                    complaint.id === updatedComplaint.id
                        ? { ...complaint, ...updatedComplaint }
                        : complaint
                );
                this._getComplaints.notifyComplaintsUpdated();
                this.isSavingComplaint = false;
                this.CloseModal();
                this._changeDetectorRef.markForCheck();
            },
            error: (error) => {
                this.isSavingComplaint = false;
                this._changeDetectorRef.markForCheck();
                console.error(error);
            }
        });
    }

    CloseModal() {
        this.complaint = null;
        this.isLoadingEditComplaint = false;
    }
}
