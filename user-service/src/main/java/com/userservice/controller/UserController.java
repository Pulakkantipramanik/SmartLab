package com.userservice.controller;

import com.userservice.entity.UserEntity;
import com.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository repo;

    @PostMapping
    public UserEntity create(@RequestBody UserEntity user) {
        return repo.save(user);
    }

    @GetMapping
    public List<UserEntity> getAll() {
        return repo.findAll();
    }
}