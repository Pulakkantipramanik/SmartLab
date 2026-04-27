package com.test_service.controller;

import com.test_service.entity.LabTest;
import com.test_service.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tests")
@RequiredArgsConstructor
public class TestController {

    private final TestRepository repo;

    @PostMapping
    public LabTest add(@RequestBody LabTest t){
        return repo.save(t);
    }

    @GetMapping
    public List<LabTest> getAll(){
        return repo.findAll();
    }
}
