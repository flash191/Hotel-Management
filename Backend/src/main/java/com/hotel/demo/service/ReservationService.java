package com.hotel.demo.service;

import com.hotel.demo.models.Reservation;

import java.util.List;
import java.util.Optional;

public interface ReservationService {
    List<Reservation> getAllReservations();

    Optional<Reservation> getReservationById(Long id);

    Reservation createReservation(Reservation reservation);

    Reservation updateReservation(Long id, Reservation updatedReservation);

    void deleteReservationById(Long id);

    List<Reservation> getReservationsByUserId(Long userId);

}
