import { Component } from '@angular/core';
<<<<<<< HEAD

=======
import { complaints } from '@shared/data/complaints'
>>>>>>> pull-rebase
@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  complaints = complaints;
}