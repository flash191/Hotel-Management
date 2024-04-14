package com.hotel.demo.controller;

import com.hotel.demo.dto.ReservationRequest;
import com.hotel.demo.models.Reservation;
import com.hotel.demo.models.Users;
import com.hotel.demo.models.Room;
import com.hotel.demo.service.ReservationService;
import com.hotel.demo.service.UserService;
import com.hotel.demo.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    private final ReservationService reservationService;
    private final UserService userService;
    private final RoomService roomService;

    @Autowired
    public ReservationController(ReservationService reservationService, UserService userService, RoomService roomService) {
        this.reservationService = reservationService;
        this.userService = userService;
        this.roomService = roomService;
    }

    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return ResponseEntity.ok(reservations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationService.getReservationById(id);
        return reservation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@Valid @RequestBody ReservationRequest request) {
        // Fetch the user and room objects from the database using the provided IDs
        Optional<Users> user = userService.getUserById(request.getUserId());
        Optional<Room> room = roomService.getRoomById(request.getRoomId());

        if (user.isPresent() && room.isPresent()) {
            // Create a new Reservation object
            Reservation reservation = new Reservation();
            reservation.setUsers(user.get());
            reservation.setRoom(room.get());
            reservation.setCheckInDate(request.getCheckInDate());
            reservation.setCheckOutDate(request.getCheckOutDate());
            reservation.setTotalPrice(request.getTotalPrice());

            // Save the reservation to the database
            Reservation createdReservation = reservationService.createReservation(reservation);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdReservation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable Long id, @Valid @RequestBody ReservationRequest request) {
        // Fetch the user and room objects from the database using the provided IDs
        Optional<Users> user = userService.getUserById(request.getUserId());
        Optional<Room> room = roomService.getRoomById(request.getRoomId());

        if (user.isPresent() && room.isPresent()) {
            // Create a new Reservation object with the provided data
            Reservation reservationToUpdate = new Reservation();
            reservationToUpdate.setId(id); // Set the ID to identify the reservation
            reservationToUpdate.setUsers(user.get());
            reservationToUpdate.setRoom(room.get());
            reservationToUpdate.setCheckInDate(request.getCheckInDate());
            reservationToUpdate.setCheckOutDate(request.getCheckOutDate());
            reservationToUpdate.setTotalPrice(request.getTotalPrice());

            // Update the reservation in the database
            Reservation updatedReservation = reservationService.updateReservation(id, reservationToUpdate);
            if (updatedReservation != null) {
                return ResponseEntity.ok(updatedReservation);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservationById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Reservation>> getReservationsByUserId(@PathVariable Long userId) {
        List<Reservation> reservations = reservationService.getReservationsByUserId(userId);
        return ResponseEntity.ok(reservations);
    }


}
