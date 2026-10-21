import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Complaint } from "@core/models";

interface StatusOption {
    status: string;
    backgroundColor: string;
    color: string;
}

@Component({
    selector: 'app-edit-complaint-modal',
    standalone: false,
    styleUrl: './edit-complaint-modal.component.css',
    templateUrl: './edit-complaint-modal.component.html'
})
export class EditComplaintModalComponent implements OnChanges {
    @Input() complaint?: Complaint | null;
    @Input() complaintId: string | null = '';
    @Input() isLoading = false;
    @Input() isSaving = false;
    @Output() HideForm = new EventEmitter<void>();
    @Output() SaveComplaint = new EventEmitter<Complaint>();

    isStatusOpen = false;
    isDiscardConfirmationOpen = false;
    private initialForm: Complaint | null = null;

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

    priorityStyles: Record<string, { backgroundColor: string; color: string }> = {
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
        priority: '',
        status: '',
        street: '',
        neighborhood: '',
        register_date: '',
        description: '',
    }

    ngOnChanges(changes: SimpleChanges): void {
        const complaint = changes['complaint']?.currentValue as Complaint | null | undefined;

        if (!complaint) {
            return;
        }

        this.form = {
            ...complaint,
            register_date: complaint.register_date?.slice(0, 10) ?? ''
        };
        this.initialForm = { ...this.form };
    }

    get selectedStatus(): StatusOption {
        return this.statusOptions.find(option => option.status === this.form.status) ?? this.statusOptions[0];
    }

    get priorityStyle(): { backgroundColor: string; color: string } {
    return this.priorityStyles[this.form.priority] ?? {
        backgroundColor: 'transparent',
        color: 'inherit'
    };
}

    toggleStatusMenu() {
        this.isStatusOpen = !this.isStatusOpen;
    }

    selectStatus(status: string) {
        this.form.status = status;
        this.isStatusOpen = false;
    }

    Save() {
        if (!this.complaint || this.isSaving) {
            return;
        }

        this.SaveComplaint.emit({ ...this.form });
    }

    Cancel(): void {
        if (this.isSaving) {
            return;
        }

        if (this.hasChanges()) {
            this.isDiscardConfirmationOpen = true;
            return;
        }

        this.HideModal();
    }

    KeepEditing(): void {
        this.isDiscardConfirmationOpen = false;
    }

    SaveChanges(): void {
        if (this.isSaving) {
            return;
        }

        this.isDiscardConfirmationOpen = false;
        this.Save();
    }

    DiscardChanges(): void {
        if (this.isSaving) {
            return;
        }

        this.isDiscardConfirmationOpen = false;
        this.HideModal();
    }

    private hasChanges(): boolean {
        if (!this.initialForm) {
            return false;
        }

        return ['problem', 'street', 'description', 'status', 'neighborhood']
            .some((field) => this.form[field as keyof Complaint] !== this.initialForm![field as keyof Complaint]);
    }

    private HideModal(): void {
        this.HideForm.emit();
    }
}
