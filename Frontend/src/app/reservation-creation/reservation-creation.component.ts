import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-creation',
  templateUrl: './reservation-creation.component.html',
  styleUrls: ['./reservation-creation.component.css']
})
export class ReservationFormComponent implements OnInit {
  userId: number = 0;
  roomId: number = 0; // Initialize as null
  checkInDate: string = '';
  checkOutDate: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    // Initialize the roomId property in the constructor
    this.route.params.subscribe(params => {
      const roomIdFromRoute = +params['roomId']; // Convert to number
      if (!isNaN(roomIdFromRoute)) {
        // Set the fetched room ID as the default value for the room ID property
        this.roomId = roomIdFromRoute;
      }
    });
  }

  ngOnInit(): void {
    // No need to subscribe again in ngOnInit, since it's already done in the constructor
  }

  onSubmit(): void {
    // Save the reservation locally
    const reservationData = {
      userId: this.userId,
      roomId: this.roomId,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate
    };
    this.saveReservationLocally(reservationData);

    // Make HTTP POST request to save the reservation
    this.makeReservation(reservationData);
  }

  saveReservationLocally(reservationData: any): void {
    // Here you can implement saving the reservation locally, for example, in local storage or a service
    console.log("Reservation saved locally:", reservationData);
  }

  makeReservation(reservationData: any): void {
    // Make HTTP POST request to the reservation endpoint
    this.http.post<any>('http://localhost:8081/api/reservations', reservationData)
      .subscribe(
        response => {
          // Handle success response
          console.log("Reservation made successfully:", response);
          // Redirect to reservations made by the user ID
          this.router.navigate(['/reservations', this.userId]);
        },
        error => {
          // Handle error response
          console.error("Error making reservation:", error);
        }
      );
  }
}
