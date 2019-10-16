package io.catalyte.team_plate_backend.controller;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.junit.Assert.*;

import com.google.gson.Gson;

import io.catalyte.team_plate_backend.domain.Address;
import io.catalyte.team_plate_backend.domain.Customer;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import javax.servlet.http.HttpServletRequest;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureMockMvc
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CustomerControllerTest {
	private Customer customer;
	private Address address;
	private Login login;
	
	private static final Logger logger = LoggerFactory.getLogger(CustomerControllerTest.class);
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired 
	private WebApplicationContext wac;
	
	@Before
	public void setUp() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).apply(springSecurity()).build();
		MockitoAnnotations.initMocks(this);
		customer = new Customer();
		address = new Address();
		login = new Login();
		
		address.setStreetAddress("12 N");
		address.setCity("Chicago");
		address.setState("IL");
		address.setZipCode("12345");
		
		customer.setFirstName("testcust");
		customer.setLastName("customer");
		customer.setEmailAddress("test@gmail.com");
		customer.setAddress(address);
	customer.setPassword(bCryptPasswordEncoder.encode("testingn@t"));
		customer.setPassword("testing@t");
		
		
	}
	
	// Good paths
	@Test
	public void A1CreateCustomerTest() throws Exception {
		Gson gson = new Gson();
		String json = gson.toJson(customer);
		MvcResult result = mockMvc.perform(post("/customers/sign-up")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andExpect(status()
				.isCreated())
	
				.andReturn();
	}
	
	@Test
	public void A2LoginCustomerTest() throws Exception {
		login.setEmailAddress("testcust@gmail.com");
		login.setPassword("testingn@t");
		Gson gson = new Gson();
		String json = gson.toJson(login);
		boolean result = mockMvc.perform(post("/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andReturn().getResponse().containsHeader("Authorization");
		logger.debug("Login: " + login);
		boolean expectedResult = true;
		assertEquals(expectedResult, result);
	}
	
	
	@Test
	public void A3LoginCustomerTestTwo() throws Exception {
		login.setEmailAddress("test@gmail.com");
//		login.setPassword("testingcustomer1212");
		login.setPassword("testingn@t");
		
		Gson gson = new Gson();
		String json = gson.toJson(login);
		MvcResult result = mockMvc.perform(post("/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andExpect(status()
				.isOk())
				.andReturn();
	}
	
	
	// Bad paths
	@Test
	public void A5InvalidCustomerTest() throws Exception {
		Customer invalidCustomer = new Customer();
		invalidCustomer.setEmailAddress("");
		Gson gson = new Gson();
		String json = gson.toJson(invalidCustomer);
		MvcResult result = mockMvc.perform(post("/customers/sign-up")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andExpect(status()
				.isBadRequest())
				.andReturn();
	}
	
	@Test
	public void A6FailedLoginTest() throws Exception {
		Login invalidLogin = new Login();
		invalidLogin.setEmailAddress(customer.getEmailAddress());
		invalidLogin.setPassword("wrongWrongWRONG");
		Gson gson = new Gson();
		String json = gson.toJson(invalidLogin);
		boolean result = mockMvc.perform(post("/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andReturn().getResponse().containsHeader("Authorization");
		boolean expectedResult = false;
		assertEquals(expectedResult, result);
	}
	
	@Test
	public void A7FailedLoginTestTwo() throws Exception {
		Login invalidLogin = new Login();
		invalidLogin.setEmailAddress(customer.getEmailAddress());
		invalidLogin.setPassword("wrongWrongWRONG");
		Gson gson = new Gson();
		String json = gson.toJson(invalidLogin);
		MvcResult result = mockMvc.perform(post("/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andExpect(status()
				.isUnauthorized())
				.andReturn();
	}
	
	@Test
	public void A8FailedLoginTestThree() throws Exception {
		Login invalidLogin = new Login();
		invalidLogin.setEmailAddress("");
		invalidLogin.setPassword("wrongWrongWRONG");
		Gson gson = new Gson();
		String json = gson.toJson(invalidLogin);
		MvcResult result = mockMvc.perform(post("/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json))
				.andExpect(status()
				.isUnauthorized())
				.andReturn();
	}
	
	@Test
	public void A9FailedGetProduct() throws Exception {
		this.mockMvc.perform(get("/customer/products")).andExpect(status().isForbidden());
	}
	
	@Test
	@WithMockUser(roles = "Customer")
	public void B1FailedGetProductTwo() throws Exception {
		boolean result = this.mockMvc.perform(get("/customer/products")).andReturn().getRequest().getHeader("Authorization") == null;
		boolean expectedResult = true;
		assertEquals(expectedResult, result);
	}
	
	@Test 
	public void testToString() {
		assertTrue(customer.toString().equals(customer.toString()));
	}

}


