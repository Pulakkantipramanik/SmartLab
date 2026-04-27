package com.example.payment_service.controller;


import com.example.payment_service.entity.Payment;
import com.example.payment_service.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentRepository repo;

    @PostMapping
    public Payment pay(@RequestBody Payment p){

        // simple logic
        if(p.getAmount() < 1000){
            p.setStatus("SUCCESS");
        } else {
            p.setStatus("FAILED");
        }

        return repo.save(p);
    }
}
