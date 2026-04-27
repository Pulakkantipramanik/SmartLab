package com.test_service.repository;


import com.test_service.entity.LabTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<LabTest, Long> {
}
