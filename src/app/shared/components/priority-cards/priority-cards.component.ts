import { Component } from "@angular/core";

@Component({
    selector: 'app-priority-cards',
    standalone: false,
    styleUrl: './priority-cards.component.css',
    templateUrl: './priority-cards.component.html',
})
export class PriorityCardsComponent {
    priorities = [
        {
            name: 'alta',
            color: '#fc2727cb'
        },
        {
            name: 'média',
            color: '#e7e00d93'
        },
        {
            name: 'baixa',
            color: '#0ed15cf3'
        }
        ]
}
