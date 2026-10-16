import { Component, EventEmitter, HostListener, Output } from "@angular/core";

@Component({
    selector: 'app-order-button',
    standalone: false,
    styleUrl: './order-button.component.css',
    template: `
        <div class="dropdownw">
            <button class="dropbtn" (click)="toggleMenu()">
                {{ buttonText }}
            </button>
        
            <div class="dropdown-content" [class.show]="isMenuOpen">
                <button class="dropdown-item" (click)="SelectOption('A &rarr; Z')">A &rarr; Z</button>
                <button class="dropdown-item" (click)="SelectOption('Z &rarr; A')">Z &rarr; A</button>
                <button class="dropdown-item" (click)="SelectOption('Mais denúncias')">Mais denúncias</button>
                <button class="dropdown-item" (click)="SelectOption('Menos denúncias')">Menos denúncias</button>
            </div>
        </div>
    `
})
export class OrderButtonComponent {
    @Output() SelectedOption = new EventEmitter<string>();

    buttonText: string = 'ORDENAR';
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    SelectOption(option: string) {
        this.buttonText = `ORDENAR: ${option}`;
        this.isMenuOpen = false;

        this.SelectedOption.emit(option);
    }

    @HostListener('document:click', ['$event'])
    OnDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;

        if (!target.closest('.dropdownw')) {
            this.isMenuOpen = false;
        }
    }
}