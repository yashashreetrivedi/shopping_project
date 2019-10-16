package io.catalyte.team_plate_backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import io.catalyte.team_plate_backend.domain.Customer;
import io.catalyte.team_plate_backend.repositories.CustomerRepo;
import io.catalyte.team_plate_validation.ValidationController;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/customers")
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	ValidationController validateController = new ValidationController();

	
	@Autowired
	CustomerRepo customerRepo;
	
	private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	

	
	/**
	 * Allows a customer to register a new account into the database with an encrypted password
	 * @param customer this represents the object sent in the request body. Contains all of the customer's desired information.
	 * @return a response entity containing the new customer and a 201 status code.
	 */
	@RequestMapping(value= "/sign-up", method = RequestMethod.POST)
	@ApiOperation("Let's a customer create an account. The customer's password gets encrypted in the database")
	@ApiResponses(value = {@ApiResponse(code = 201, message = "Customer registered", responseContainer = "List", response = Customer.class)})
	public ResponseEntity<Customer> signUp(@RequestBody Customer customer) {
	boolean isValid = validateCustomer(customer);
		if (isValid) {
			customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));
			customerRepo.save(customer);
			return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
		} else
			return new ResponseEntity<Customer>(HttpStatus.BAD_REQUEST);
	}

	
	
     private boolean validateCustomer(Customer customer) {
		if (customer != null && validateController.validateNotNullElements(customer)
				&& validateController.validateEmail(customer.getEmailAddress())
				&& validateController.validateZipCode(customer.getAddress().getZipCode()) && validateController.validatePassword(customer.getPassword()) ) {
			return true;
		} else {
			return false;
		}

	}
}


