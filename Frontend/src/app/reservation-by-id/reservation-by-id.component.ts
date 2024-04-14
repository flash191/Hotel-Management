import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservation-by-id',
  templateUrl: './reservation-by-id.component.html',
  styleUrls: ['./reservation-by-id.component.css']
})
export class ReservationByIdComponent implements OnInit {
  userId: number = 0;
  reservations: Reservation[] = [];

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      this.loadReservations();
    });
  }

  loadReservations(): void {
    this.reservationService.getReservationsByUserId(this.userId)
      .subscribe(reservations => {
      this.reservations = reservations.filter(reservation => reservation.users?.id=== this.userId);
      });
  }
}
