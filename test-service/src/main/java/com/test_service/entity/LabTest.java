package com.test_service.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class LabTest {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private double price;
}
