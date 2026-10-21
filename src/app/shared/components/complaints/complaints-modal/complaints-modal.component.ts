import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output } from "@angular/core";
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
          @if (isLoading) {
            <div class="complaints-modal-skeleton" aria-label="Carregando denúncias">
              @for (item of [1, 2, 3, 4]; track item) { <span></span> }
            </div>
          } @else if (neighborhoodName) {
            <app-complaints [filteredComplaints]="filteredComplaints?.filter(c => c.neighborhood === neighborhoodName)">
            </app-complaints>
          } @else if (date) { 
            <app-complaints [filteredComplaints]="filteredComplaints?.filter(c => c.status !== 'CONCLUÍDA')"></app-complaints>

            <h3>Concluídas:</h3>
            <app-complaints [filteredComplaints]="filteredComplaints?.filter(c => c.status === 'CONCLUÍDA')"></app-complaints>
          }
        
            
        </div>

      </div>
    </div>
    `
})
export class ComplaintsModalComponent implements OnInit {
    private _changeDetectorRef = inject(ChangeDetectorRef);
    @Input() neighborhoodName?: string = '';
    @Input() date?: Date | null = null;
    @Input() filteredComplaints?: Complaint[] = [];
    @Input() isLoading = false;
    @Output() HideComplaints = new EventEmitter<string>();

    notConcludedComplaints?: Complaint[] = this.filteredComplaints?.filter(c => c.status === 'CONCLUÍDA');

    ngOnInit(): void {
      this._changeDetectorRef.markForCheck();
    }

    HideModal() {
        this.HideComplaints.emit();
    }
}
