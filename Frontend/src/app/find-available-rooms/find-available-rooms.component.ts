import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { Room } from '../room';

@Component({
  selector: 'app-find-available-rooms',
  templateUrl: './find-available-rooms.component.html',
  styleUrls: ['./find-available-rooms.component.css']
})
export class FindAvailableRoomsComponent implements OnInit {
  availableRooms: Room[] = [];

  constructor(private http: HttpClient, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.fetchAvailableRooms();
  }

  fetchAvailableRooms(): void {
    this.http.get<Room[]>('http://localhost:8081/api/rooms/available')
      .subscribe(
        (data: Room[]) => {
          this.availableRooms = data;
        },
        (error) => {
          console.error('Error fetching available rooms:', error);
        }
      );
  }

  makeReservation(roomId: number): void {
    // Navigate to the reservation creation page with the room ID as a parameter
    this.router.navigate(['/create-reservation', roomId],{ queryParams: { roomId: roomId } });
  }
}
