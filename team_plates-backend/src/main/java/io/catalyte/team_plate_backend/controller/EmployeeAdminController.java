package io.catalyte.team_plate_backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.catalyte.team_plate_backend.repositories.EmployeeAdminRepo;


@RestController
@RequestMapping("/users")
public class EmployeeAdminController {
	private static final Logger logger = LoggerFactory.getLogger(EmployeeAdminController.class);
	@Autowired
	EmployeeAdminRepo employeeAdminRepo;
	
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public EmployeeAdminController(BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
}
