package com.booking_service.controller;

import com.booking_service.entity.Booking;
import com.booking_service.feign.ReportClient;
import com.booking_service.repository.BookingRepository;
import com.booking_service.feign.PaymentClient;
import com.booking_service.dto.Payment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingRepository repo;
    private final PaymentClient paymentClient;
    private final ReportClient reportClient;

    @PostMapping
    public Booking create(@RequestBody Booking b) {

        b.setStatus("PENDING");
        Booking saved = repo.save(b);

        // Payment call
        Payment p = new Payment();
        p.setBookingId(saved.getId());
        p.setAmount(500);

        Payment res = paymentClient.pay(p);

        if ("SUCCESS".equals(res.getStatus())) {
            saved.setStatus("CONFIRMED");

            // 👉 Report call
            Map<String, Object> report = new HashMap<>();
            report.put("bookingId", saved.getId());
            report.put("testName", "Blood Test");
            report.put("result", "Normal");

            reportClient.createReport(report);

        } else {
            saved.setStatus("FAILED");
        }

        return repo.save(saved);
    }
}