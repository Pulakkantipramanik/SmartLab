package com.userservice.controller;

import com.userservice.dto.LoginRequest;
import com.userservice.dto.LoginResponse;
import com.userservice.entity.UserEntity;
import com.userservice.repository.UserRepository;
import com.userservice.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository repo;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest req){

        UserEntity user = repo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!user.getPassword().equals(req.getPassword())){
            throw new RuntimeException("Invalid password");
        }

        String token = JwtUtil.generateToken(user.getEmail());

        return new LoginResponse(token);
    }
}
