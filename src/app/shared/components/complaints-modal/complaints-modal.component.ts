import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Complaint } from "@core/models";

@Component({
    selector: 'app-complaints-modal',
    standalone: false,
    styleUrl: './complaints-modal.component.css',
    template: `
    <div class="modal-overlay" (click)="HideModal()">
      <div class="modal-container" (click)="$event.stopPropagation()">
        
        <div class="modal-header">
          <h3>Denúncias - 
            @if (neighborhoodName) {
              {{ neighborhoodName }}
            } @else if (date) {
              {{ date | date: 'dd/MM/yyyy' }}
            }

          </h3>
          <button class="btn-fechar" (click)="HideModal()">&times;</button>
        </div>

        <div class="modal-body">
            <app-complaints [filteredComplaints]="filteredComplaints.filter(c => c.neighborhood.name === neighborhoodName)"></app-complaints>
        </div>

      </div>
    </div>
    `
})
export class ComplaintsModalComponent {
    @Input() neighborhoodName?: string = '';
    @Input() date?: Date | null = null;
    @Input() filteredComplaints: Complaint[] = [];
    @Output() HideComplaints = new EventEmitter<string>

    HideModal() {
        this.HideComplaints.emit();
    }
}