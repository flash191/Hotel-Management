package com.hotel.demo.service;

import com.hotel.demo.models.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    List<Room> getAllRooms();
    Optional<Room> getRoomById(Long id);
    Room createRoom(Room room);
    void deleteRoomById(Long id);
    Room updateRoom(Long id, Room room);

    List<Room> findAvailableRooms();

}
