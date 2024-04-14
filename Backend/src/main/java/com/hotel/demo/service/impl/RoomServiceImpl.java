package com.hotel.demo.service.impl;

import com.hotel.demo.models.Room;
import com.hotel.demo.repository.RoomRepository;
import com.hotel.demo.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getRoomById(Long id) {
        return roomRepository.findById(id);
    }

    @Override
    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoomById(Long id) {
        roomRepository.deleteById(id);
    }

    @Override
    public List<Room> findAvailableRooms() {
        return roomRepository.findAvailableRooms();
    }


    @Override
    public Room updateRoom(Long id, Room room) {
        // Check if the room exists
        if (roomRepository.existsById(id)) {
            // Set the ID of the room to update
            room.setId(id);
            // Save the updated room
            return roomRepository.save(room);
        } else {
            // If the room doesn't exist, return null or throw an exception
            return null; // or throw new RoomNotFoundException("Room not found with id: " + id);
        }
    }
}
