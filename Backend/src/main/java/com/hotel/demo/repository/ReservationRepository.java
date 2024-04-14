package com.hotel.demo.repository;

import com.hotel.demo.models.Reservation;
import com.hotel.demo.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUsersId(Long userId);


}
