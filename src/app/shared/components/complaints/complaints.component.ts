import { Component } from "@angular/core";

@Component({
    selector: 'app-complaints',
    standalone: false,
    styleUrl: './complaints.component.css',
    templateUrl: './complaints.component.html',
})
export class ComplaintsComponent {
    isExpanded: boolean = false;

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
}