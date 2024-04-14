package com.hotel.demo.service.impl;

import com.hotel.demo.models.Reservation;
import com.hotel.demo.models.Users;
import com.hotel.demo.repository.ReservationRepository;
import com.hotel.demo.repository.UserRepository;
import com.hotel.demo.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public Reservation createReservation(Reservation reservation) {
        // Additional business logic/validation can be added here before saving
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation updateReservation(Long id, Reservation updatedReservation) {
        Optional<Reservation> existingReservationOptional = reservationRepository.findById(id);
        if (existingReservationOptional.isPresent()) {
            Reservation existingReservation = existingReservationOptional.get();
            existingReservation.setCheckInDate(updatedReservation.getCheckInDate());
            existingReservation.setCheckOutDate(updatedReservation.getCheckOutDate());
            existingReservation.setTotalPrice(updatedReservation.getTotalPrice());

            // Update the user and room fields if necessary
            if (updatedReservation.getUsers() != null) {
                existingReservation.setUsers(updatedReservation.getUsers());
            }
            if (updatedReservation.getRoom() != null) {
                existingReservation.setRoom(updatedReservation.getRoom());
            }

            return reservationRepository.save(existingReservation);
        } else {
            return null; // Or throw an exception if the reservation with the given ID does not exist
        }
    }

    @Override
    public List<Reservation> getReservationsByUserId(Long userId) {
        return reservationRepository.findByUsersId(userId);
    }




    @Override
    public void deleteReservationById(Long id) {
        reservationRepository.deleteById(id);
    }
}
