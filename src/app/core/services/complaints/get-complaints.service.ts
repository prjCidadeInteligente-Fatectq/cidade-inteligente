import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Complaint } from "@core/models";
import { ComplaintStatusQuant } from "@shared/components/complaints/complaint-counter/complaint-counter.component";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GetComplaintsService {
    private _httpClient = inject(HttpClient);
    private _apiUrl = '/api/complaints';

    getTotalComplaints(): Observable<ComplaintStatusQuant> {
        return this._httpClient.get<ComplaintStatusQuant>(`${this._apiUrl}/GetTotalComplaints`)
    }

    

    getComplaintsByNeighborhood(neighborhoodId: string): Observable<Complaint[]> {
        const params = new HttpParams()
        .set('', neighborhoodId);

        return this._httpClient.get<Complaint[]>(this._apiUrl, { params })
    }

    getComplaintsByDate(date: string): Observable<Complaint[]> {
        const params = new HttpParams()
        .set('', date);

        return this._httpClient.get<Complaint[]>(this._apiUrl, { params })
    }
}