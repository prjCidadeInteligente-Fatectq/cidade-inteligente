import { NeighbohoodComponent } from './components/neighborhoods/neighborhoods.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintCounterComponent } from './components/complaint-counter/complaint-counter.component';
import { PriorityCardsComponent } from './components/priority-cards/priority-cards.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, NeighbohoodComponent, ComplaintsComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, NeighbohoodComponent, ComplaintsComponent],
})
export class SharedModule {}
