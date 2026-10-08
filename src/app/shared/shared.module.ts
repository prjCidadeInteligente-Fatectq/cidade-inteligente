import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintCounterComponent } from './components/complaint-counter/complaint-counter.component';

@NgModule({
  declarations: [ComplaintCounterComponent],
  imports: [CommonModule],
  exports: [ComplaintCounterComponent],
})
export class SharedModule {}
