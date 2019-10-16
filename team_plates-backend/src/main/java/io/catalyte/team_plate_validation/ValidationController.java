package io.catalyte.team_plate_validation;

import io.catalyte.team_plate_backend.domain.Customer;

public class ValidationController {

	public boolean validateEmail(String validEmail) {
		if (validEmail.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
			return true;
		}

		else {
			return false;
		}
	}
	
	public boolean validateZipCode(String zipcode) {
		if (zipcode.matches("^[0-9]{5}")) {
			return true;
		} else {
			return false;
		}
	}
	
	public boolean validatePassword(String password) {
		if (password.matches("^[a-z](?=.*[@#$%^&+=]).*${8}")) {
			return true;
		} else {
			return false;
		}
	}
	public boolean validateNotNullElements(Customer customer) {
		if((customer.getEmailAddress().equals("") || customer.getEmailAddress() == null) ||
		   (customer.getFirstName().equals("") || customer.getFirstName() == null)	||
		   (customer.getLastName().equals("") || customer.getLastName() == null) ||
		   (customer.getPassword().equals("") || customer.getPassword() == null) ||
		   (customer.getAddress() == null) ||
		   (customer.getAddress().getStreetAddress().equals("") || customer.getAddress().getStreetAddress() == null) ||
		   (customer.getAddress().getCity().equals("") || customer.getAddress().getCity() == null) ||
		   (customer.getAddress().getState().equals("") || customer.getAddress().getState() == null) ||
		   (customer.getAddress().getZipCode().equals("") || customer.getAddress().getZipCode() == null)) {
				return false;
		}
		return true;
}
}
