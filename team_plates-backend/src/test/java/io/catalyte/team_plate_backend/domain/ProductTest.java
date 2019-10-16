package io.catalyte.team_plate_backend.domain;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.google.gson.Gson;

import io.catalyte.team_plate_backend.repositories.ProductRepo;

import org.junit.Test;


@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureMockMvc
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class ProductTest {




		private static final Logger logger = LoggerFactory.getLogger(ProductRepo.class);
		private Product product;
		private String id = "Test Id";
		private String name = "Test Name";
		private String image = "Test Image";
		private String demographic = "Test Demographic";
		private Double price = 20.00;
		private String date = "Test Date";
		private int clicked = 1;
		private int qty = 1;
		private String type = "Test Type";
		private String description = "Test Description";






		@Autowired
		private MockMvc mockMvc;

		@Autowired
		private WebApplicationContext wac;

		@Before
		public void setUp() {
			mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).apply(springSecurity()).build();
			MockitoAnnotations.initMocks(this);

			product = new Product();
			product.setId("Test Id");
			product.setName("Test Name");
			product.setImage("Test Image");
			product.setDemographic("Test Demographic");
			product.setDescription("Test Description");
			product.setCategory("Test Category");
			product.setPrice(20.00);
			product.setDate("Test Date");
			product.setClicked(1);
			product.setQuantity(1);
			product.setType("Test Type");
			
		}

		@Test
		public void testId() throws Exception {
			String id = "Test Id";
			assertEquals(id, product.getId());
		}
		
		@Test
		public void testName() throws Exception {
			String id = "Test Name";
			assertEquals(id, product.getName());
		}
		
		@Test
		public void testImage() throws Exception {
			String id = "Test Image";
			assertEquals(id, product.getImage());
		}
		
		@Test
		public void testDemographic() throws Exception {
			String id = "Test Demographic";
			assertEquals(id, product.getDemographic());
		}
		
		@Test
		public void testCategory() throws Exception {
			String id = "Test Category";
			assertEquals(id, product.getCategory());
		}
		
		@Test
		public void testPrice() throws Exception {
			double id = 20.00;
			assertEquals(id, product.getPrice());
		}
		
		@Test
		public void testDate() throws Exception {
			String id = "Test Date";
			assertEquals(id, product.getDate());
		}
		
		@Test
		public void testClicked() throws Exception {
			int id = 1;
			assertEquals(id, product.getClicked());
		}

		
		@Test
		public void testQuantity() throws Exception {
			int id = 1;
			assertEquals(id, product.getQuantity());
		}

		
		@Test
		public void testDescription() throws Exception {
			String id = "Test Description";
			assertEquals(id, product.getDescription());
		}
		
		@Test
		public void testType() throws Exception {
			String id = "Test Type";
			assertEquals(id, product.getType());
		}		
		
}

