import { Component, EventEmitter, HostListener, input, Input, Output } from "@angular/core";

@Component({
    selector: 'app-options',
    standalone: false,
    styleUrl: './options-button.component.css',
    template: `
        <div class="dropdownw">
            <button class="dropbtn" (click)="toggleMenu()">
                {{ buttonText }} <span class="icon">{{ buttonText === 'ORDENAR' ? '▼' : '' }}</span>
            </button>
        
            <div class="dropdown-content" [class.show]="isMenuOpen">
                @if (optionOne && optionTwo) {
                    <button class="dropdown-item" (click)="SelectOption(optionOne + 'A &rarr; Z')">{{ optionOne }}</button>
                    <button class="dropdown-item" (click)="SelectOption(optionTwo + 'Z &rarr; A')">{{ optionTwo }}</button>
                }
                    
                <button class="dropdown-item" (click)="SelectOption(optionThree)">{{ optionThree }}</button>
                <button class="dropdown-item" (click)="SelectOption(optionFour)">{{ optionFour }}</button>
            </div>
        </div>
    `
})
export class OptionsButtonComponent {
    @Input() buttonText: string = 'ORDENAR';
    @Input() optionOne: string = '';
    @Input() optionTwo: string = '';
    @Input() optionThree: string = '';
    @Input() optionFour: string = '';

    @Input() isMenuOpen: boolean = false;
    @Output() MenuChanges = new EventEmitter<boolean>();
    @Output() SelectedOption = new EventEmitter<string>();


    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.MenuChanges.emit(this.isMenuOpen);
    }

    SelectOption(option: string) {
        if (this.buttonText === 'ORDENAR'){
            this.buttonText = `ORDENAR: ${option}`;
            this.isMenuOpen = false;
    
            this.SelectedOption.emit(option);
        }
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