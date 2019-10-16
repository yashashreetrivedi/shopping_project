package io.catalyte.team_plate_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.catalyte.team_plate_backend.domain.Customer;

public interface CustomerRepo extends MongoRepository<Customer, String> {
	Customer findByEmailAddress(String email);
}
