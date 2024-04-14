import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room'; //

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseURL = "http://localhost:8081/api/rooms";

  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]> { 
    return this.httpClient.get<Room[]>(this.baseURL);
  }
  createRoom(room: Room): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/rooms`, room);
  }
  updateRoom(room: Room): Observable<Room> {
    return this.httpClient.put<Room>(`${this.baseURL}/${room.id}`, room);
  }

  deleteRoom(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
    getRoomById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`${this.baseURL}/${id}`);
  }



}
