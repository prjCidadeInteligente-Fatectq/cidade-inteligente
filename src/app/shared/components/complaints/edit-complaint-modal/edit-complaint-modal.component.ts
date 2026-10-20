import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-edit-complaint-modal',
    standalone: false,
    styleUrls: ['./edit-complaint-modal.component.css', '../complaints-modal/complaints-modal.component.css'],
    templateUrl: './edit-complaint-modal.component.html'
})
export class EditComplaintModalComponent implements OnInit {
    @Input() complaintId: string = '';
    @Input() complaint: Complaint | null = null;
    @Output() HideForm = new EventEmitter<string>();
    
    ngOnInit(): void {
        this.complaint;
    }

    HideModal() {
        this.HideForm.emit();
    }
}