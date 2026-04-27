package com.booking_service.dto;


import lombok.Data;

@Data
public class Payment {
    private Long bookingId;
    private double amount;
    private String status;
}