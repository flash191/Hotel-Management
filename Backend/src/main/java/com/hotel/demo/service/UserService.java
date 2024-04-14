package com.hotel.demo.service;

import com.hotel.demo.models.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<Users> getAllUsers();
    Optional<Users> getUserById(Long id);
    Users createUser(Users user);
    Users updateUser(Long id, Users user);
    void deleteUserById(Long id);
    Users findByUsername(String username);

}
