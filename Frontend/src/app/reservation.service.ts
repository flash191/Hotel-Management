import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:8081/api/reservations";

  constructor(private httpClient: HttpClient) { }

  makeReservation(reservationData: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL, reservationData);
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.baseURL);
  }

  getReservationsByUserId(userId: number): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL}?userId=${userId}`);
  }

}
