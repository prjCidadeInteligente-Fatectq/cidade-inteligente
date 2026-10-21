import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Complaint, ComplaintStatusType, NeighborhoodPriority } from "@core/models";

interface StatusOption {
    status: ComplaintStatusType;
    backgroundColor: string;
    color: string;
}

@Component({
    selector: 'app-edit-complaint-modal',
    standalone: false,
    styleUrl: './edit-complaint-modal.component.css',
    templateUrl: './edit-complaint-modal.component.html'
})
export class EditComplaintModalComponent {
    @Input() complaint?: Complaint | null;
    @Input() complaintId: string | null = '';
    @Output() HideForm = new EventEmitter<string>();
    @Output() SaveComplaint = new EventEmitter<Complaint>();

    isStatusOpen = false;

    statusOptions: StatusOption[] = [
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
    ];

    priorityStyles: Record<NeighborhoodPriority, { backgroundColor: string; color: string }> = {
        ALTA: {
            backgroundColor: 'hsla(0, 93%, 60%, 0.15)',
            color: '#b91c1c'
        },
        MÉDIA: {
            backgroundColor: 'hsla(60, 100%, 57%, 0.15)',
            color: '#8a8a00'
        },
        BAIXA: {
            backgroundColor: 'hsla(121, 57%, 53%, 0.15)',
            color: '#1e7a1e'
        }
    };

    form: Complaint = {
        id: '',
        problem: '',
        status: 'PENDENTE',
        street: '',
        neighborhood: '',
        register_date: '',
        description: '',
        phone: '',
        user_id: '',
    }

    get selectedStatus(): StatusOption {
        return this.statusOptions.find(option => option.status === this.form.status) ?? this.statusOptions[0];
    }

    // get priorityStyle(): { backgroundColor: string; color: string } {
    //     return this.priorityStyles[this.form.priority];
    // }

    toggleStatusMenu() {
        this.isStatusOpen = !this.isStatusOpen;
    }

    selectStatus(status: ComplaintStatusType) {
        this.form.status = status;
        this.isStatusOpen = false;
    }

    Save() {
        if (!this.complaint) {
            return;
        }

        const updated: Complaint = {
            ...this.form,
            register_date: `${this.form.register_date.slice(0, 10)}T00:00:00Z`
        };

        this.SaveComplaint.emit(updated);
        this.HideModal();
    }

    HideModal() {
        this.HideForm.emit();
    }
}
