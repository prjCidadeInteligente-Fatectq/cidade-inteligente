import { NeighbohoodComponent } from './components/neighborhoods/neighborhoods.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplaintCounterComponent } from './components/complaints/complaint-counter/complaint-counter.component';
import { PriorityCardsComponent } from './components/priority-cards/priority-cards.component';
import { ComplaintsComponent } from './components/complaints/complaints/complaints.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComplaintsModalComponent } from './components/complaints/complaints-modal/complaints-modal.component';
import { OptionsButtonComponent } from './components/options-button/options-button.component';
import { MonthComponent } from './components/month/month.component';
import { NeedAttentionComponent } from './components/need-attention/need-attention.component';
import { EditComplaintModalComponent } from './components/complaints/edit-complaint-modal/edit-complaint-modal.component';
import { DeleteComplaintModalComponent } from './components/complaints/delete-complaint-modal/delete-complaint-modal.component';

@NgModule({
  declarations: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, OptionsButtonComponent, EditComplaintModalComponent, DeleteComplaintModalComponent,
                  NeighbohoodComponent, ComplaintsComponent, ComplaintsModalComponent, MonthComponent, NeedAttentionComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, OptionsButtonComponent, EditComplaintModalComponent, DeleteComplaintModalComponent,
            NeighbohoodComponent, ComplaintsComponent, ComplaintsModalComponent, MonthComponent, NeedAttentionComponent],
})
export class SharedModule {}
