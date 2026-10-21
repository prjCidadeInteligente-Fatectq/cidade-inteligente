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
                @if (optionOne) {
                    <button class="dropdown-item" (click)="SelectOption(optionOne)">{{ optionOne }}</button>
                } 
                @if (optionTwo) {
                    <button class="dropdown-item" (click)="SelectOption(optionTwo)">{{ optionTwo }}</button>
                } 
                @if (optionThree) {
                    <button class="dropdown-item" (click)="SelectOption(optionThree)">{{ optionThree }}</button>
                } 
                @if (optionFour) {
                    <button class="dropdown-item" (click)="SelectOption(optionFour)">{{ optionFour }}</button>
                }
                
                    
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
        this.isMenuOpen = false;
        this.MenuChanges.emit(false);

        if (this.buttonText === 'ORDENAR') {
            this.buttonText = `ORDENAR: ${option}`;
        }

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