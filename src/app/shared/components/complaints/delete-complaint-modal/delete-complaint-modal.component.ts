import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-delete-complaint-modal',
    standalone: false,
    styleUrl: './delete-complaint-modal.component.css',
    templateUrl: './delete-complaint-modal.component.html',
})
export class DeleteComplaintModalComponent {
    @Input() complaint?: Complaint | null;
    @Output() CancelDelete = new EventEmitter<void>();
    @Output() ConfirmDelete = new EventEmitter<Complaint>();

    Cancel() {
        this.CancelDelete.emit();
    }

    Delete() {
        if (!this.complaint) {
            return;
        }

        this.ConfirmDelete.emit(this.complaint);
    }
}
