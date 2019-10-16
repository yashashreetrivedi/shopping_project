package io.catalyte.team_plate_backend.domain;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class Employee_AdminTest {
	
	String id = "12345";
	String firstName = "TestFirst";
	String lastName = "TestLast";
	String emailAddress = "test@gmail.com";
	String password = "1234567@";
	String role = "Tester";
	Employee_Admin empAdm;
	
	@Before
	public void setUp() {
		empAdm = new Employee_Admin();
	}
	
	
	@Test
	public void testId() {
		empAdm.setId(id);
		assertTrue(empAdm.getId().equals(id));
	}
	
	@Test
	public void testfirstName() {
		empAdm.setFirstName(firstName);
		assertTrue(empAdm.getFirstName().equals(firstName));
	}
	
	@Test
	public void testLastName() {
		empAdm.setLastName(lastName);
		assertTrue(empAdm.getLastName().equals(lastName));
	}
	
	@Test
	public void testIdEmailAddress() {
		empAdm.setEmailAddress(emailAddress);
		assertTrue(empAdm.getEmailAddress().equals(emailAddress));
	}
	
	@Test
	public void testIdPassword() {
		empAdm.setPassword(password);
		assertTrue(empAdm.getPassword().equals(password));
	}
	
	@Test
	public void testRole() {
		empAdm.setRole(role);
		assertTrue(empAdm.getRole().equals(role));
	}
	
	@Test 
	public void testToString() {
		assertTrue(empAdm.toString().equals(empAdm.toString()));
	}

}
