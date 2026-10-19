import { Complaint } from '@core/models';
import { Component, Input } from "@angular/core";

type Flow = 'COUNT' | 'FILTER'

@Component({
    selector: 'app-month',
    standalone: false,
    styleUrl: './month.component.css',
    templateUrl: './month.component.html'
})
export class MonthComponent {
    @Input() complaints: Complaint[] = [];

    currentDate = new Date();

    days: Date[] = [];

    selectedDate: Date | null = null;
    isModalOpen: boolean = false;

    isDaySelected: boolean = false;

    ngOnInit(): void {
        this.generateCalendar();
    }

    generateCalendar(): void {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const startDate = new Date(year, month, 1 - firstDay.getDay());

        this.days = Array.from({ length: 42 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return date;
        });
    }

    previousMonth(): void {
        this.currentDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() - 1,
            1
        );

        this.generateCalendar();
    }

    nextMonth(): void {
        if (!this.canGoNext()) return;

        this.currentDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            1
        );

        this.generateCalendar();
    }

    canGoNext(): boolean {
        const today = new Date();

        return (
            this.currentDate.getFullYear() < today.getFullYear() ||
            (
            this.currentDate.getFullYear() === today.getFullYear() &&
            this.currentDate.getMonth() < today.getMonth()
            )
        );
    }

    get monthLabel(): string {
        return this.currentDate.toLocaleDateString('pt-BR', {
            month: 'long',
            year: 'numeric'
        });
    }

    getFilteredComplaintsByDate(day: Date, flow: Flow): any {
        const year = day.getFullYear();
        const month = String(day.getMonth() + 1).padStart(2, '0');
        const dayNum = String(day.getDate()).padStart(2, '0');
        
        const calendarDateString = `${year}-${month}-${dayNum}`;
        
        if (flow === 'COUNT') {
            return this.complaints.filter(c => { return c.registerDate && c.registerDate.startsWith(calendarDateString); }).length;
        } else if (flow === 'FILTER') {
            return this.complaints.filter(c => { return c.registerDate && c.registerDate.startsWith(calendarDateString); });
        }
        else return;
    }

    toggleIsDaySelected(date: Date) {
        this.selectedDate = date;
        this.isDaySelected = true;
    }

    OpenModal() {
        if (this.selectedDate === null) return;

        this.isModalOpen = true;
    }

    CloseModal() {
        this.selectedDate = null;
        this.isModalOpen = false
        this.isDaySelected = false;
    }
}