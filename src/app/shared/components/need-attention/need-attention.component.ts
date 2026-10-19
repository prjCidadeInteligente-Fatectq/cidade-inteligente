import { Component, Input } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-need-attention',
    standalone: false,
    styleUrl: './need-attention.component.css',
    template: `
        <app-complaints [filteredComplaints]="olderThanOneWeek"></app-complaints>
    `
})
export class NeedAttentionComponent {
    @Input() filteredComplaints: Complaint[] = [];

    get olderThanOneWeek(): Complaint[] {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        return this.filteredComplaints.filter(complaint => new Date(complaint.registerDate) < oneWeekAgo);
    }
}