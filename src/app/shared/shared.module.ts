import { NeighbohoodComponent } from './components/neighborhoods/neighborhoods.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintCounterComponent } from './components/complaint-counter/complaint-counter.component';
import { PriorityCardsComponent } from './components/priority-cards/priority-cards.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComplaintsModalComponent } from './components/complaints-modal/complaints-modal.component';
import { OrderButtonComponent } from './components/order-button/order-button.component';
import { MonthComponent } from './components/month/month.component';

@NgModule({
  declarations: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, OrderButtonComponent,
                  NeighbohoodComponent, ComplaintsComponent, ComplaintsModalComponent, MonthComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ComplaintCounterComponent, PriorityCardsComponent, OrderButtonComponent,
            NeighbohoodComponent, ComplaintsComponent, ComplaintsModalComponent, MonthComponent],
})
export class SharedModule {}
