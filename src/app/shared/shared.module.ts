import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintCounterComponent } from './components/complaint-counter/complaint-counter.component';
import { PriorityCardsComponent } from './components/priority-cards/priority-cards.component';

@NgModule({
  declarations: [ComplaintCounterComponent, PriorityCardsComponent],
  imports: [CommonModule],
  exports: [ComplaintCounterComponent, PriorityCardsComponent],
})
export class SharedModule {}
