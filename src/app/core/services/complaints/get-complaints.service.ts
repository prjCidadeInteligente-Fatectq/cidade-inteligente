import { ComplaintById } from '@core/models';
import { Neighborhood } from '@core/models';
import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Complaint } from "@core/models";
import { Observable } from "rxjs";

export interface ComplaintStatusQuant {
  totalPending: number;
  totalProgress: number;
  totalComplet: number;
}

@Injectable({
    providedIn: 'root'
})
export class GetComplaintsService {
    private _httpClient = inject(HttpClient);
    private _apiUrl = 'http://localhost:5129/api/complaints';

    getTotalComplaints(): Observable<ComplaintStatusQuant> {
        return this._httpClient.get<ComplaintStatusQuant>(`${this._apiUrl}/GetTotalComplaints`)
    }

    getNeighborhoodsWithTotal(): Observable<Neighborhood[]> {
        return this._httpClient.get<Neighborhood[]>(`${this._apiUrl}/GetComplaintsByNeighborhoodWithTotal`);
    }

    getComplaintsByNeighborhood(neighborhood: string): Observable<ComplaintById[]> {
        return this._httpClient.get<ComplaintById[]>(`${this._apiUrl}/GetAllComplaintsByNeighborhood/${neighborhood}`);
    }

    getComplaintsWithOldTimeRange(): Observable<Complaint[]> {
        return this._httpClient.get<Complaint[]>(`${this._apiUrl}/GetAllComplaintsWithOldestTimeRange`);
    }

    getComplaintById(id: string): Observable<ComplaintById> {
        return this._httpClient.get<ComplaintById>(`${this._apiUrl}/GetComplaintsById/${id}`)
    }
}