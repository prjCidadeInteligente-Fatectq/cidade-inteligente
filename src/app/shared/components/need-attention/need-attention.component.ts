import { Component, Input } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-need-attention',
    standalone: false,
    styleUrl: './need-attention.component.css',
    template: `
        <app-complaints [filteredComplaints]="complaintsWithOldTimeRange"></app-complaints>
    `
})
export class NeedAttentionComponent {
    @Input() complaintsWithOldTimeRange: Complaint[] = [];
}