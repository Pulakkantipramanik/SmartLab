package com.booking_service.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "report-service")
public interface ReportClient {

    @PostMapping("/reports")
    Object createReport(@RequestBody Object report);
}
