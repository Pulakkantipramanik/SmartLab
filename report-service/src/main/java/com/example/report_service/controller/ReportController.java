package com.example.report_service.controller;

import com.example.report_service.entity.Report;
import com.example.report_service.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportRepository repo;

    @PostMapping("/upload")
    public Report upload(@RequestParam("file") MultipartFile file,
                         @RequestParam Long bookingId) throws IOException {

        String folder = "C:/reports/";

        File dir = new File(folder);
        if (!dir.exists()) dir.mkdirs();

        String filePath = folder + file.getOriginalFilename();
        file.transferTo(new File(filePath));

        Report r = new Report();
        r.setBookingId(bookingId);
        r.setFileUrl(filePath);

        return repo.save(r);
    }

    @GetMapping("/{bookingId}")
    public Report get(@PathVariable Long bookingId){
        return repo.findByBookingId(bookingId).orElseThrow();
    }
}