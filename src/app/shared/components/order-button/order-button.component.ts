import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";

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
    @Input() isMenuOpen: boolean = false;
    @Output() MenuChanges = new EventEmitter<boolean>();
    @Output() SelectedOption = new EventEmitter<string>();

    buttonText: string = 'ORDENAR';

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.MenuChanges.emit(this.isMenuOpen);
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
            this.MenuChanges.emit(false);
        }
    }
}