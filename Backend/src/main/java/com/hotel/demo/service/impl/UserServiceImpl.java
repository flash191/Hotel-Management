package com.hotel.demo.service.impl;

import com.hotel.demo.models.Users;
import com.hotel.demo.repository.UserRepository;
import com.hotel.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<Users> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Users createUser(Users user) {
        return userRepository.save(user);
    }

    @Override
    public Users updateUser(Long id, Users updatedUser) {
        Optional<Users> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            Users existingUser = existingUserOptional.get();
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setRole(updatedUser.getRole()); // Update the role
            return userRepository.save(existingUser);
        } else {
            return null; // Or throw an exception if the user with the given ID does not exist
        }
    }
    @Override
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
