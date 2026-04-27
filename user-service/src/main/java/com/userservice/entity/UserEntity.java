package com.userservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "user_entity")
@Entity
@Data
public class UserEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String password;
}

