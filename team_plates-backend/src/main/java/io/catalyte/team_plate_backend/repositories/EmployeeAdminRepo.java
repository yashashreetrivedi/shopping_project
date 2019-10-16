package io.catalyte.team_plate_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.catalyte.team_plate_backend.domain.Employee_Admin;

public interface EmployeeAdminRepo extends MongoRepository<Employee_Admin, String>{
	Employee_Admin findByEmailAddress(String email);
}
