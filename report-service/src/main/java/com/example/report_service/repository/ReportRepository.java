package com.example.report_service.repository;

import com.example.report_service.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReportRepository extends JpaRepository<Report, Long> {
    Optional<Report> findByBookingId(Long bookingId);
}