import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintCounterComponent } from './components/complaint-counter/complaint-counter.component';
import { PriorityCardsComponent } from './components/priority-cards/priority-cards.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';

@NgModule({
  declarations: [ComplaintCounterComponent, PriorityCardsComponent, ComplaintsComponent],
  imports: [CommonModule],
  exports: [ComplaintCounterComponent, PriorityCardsComponent, ComplaintsComponent],
})
export class SharedModule {}
