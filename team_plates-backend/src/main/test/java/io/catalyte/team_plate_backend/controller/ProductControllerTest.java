package io.catalyte.team_plate_backend.controller;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureMockMvc
public class ProductControllerTest {
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private WebApplicationContext wac;
	
	@Before
	public void setUp() {
		mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
		MockitoAnnotations.initMocks(this);
	}
	
	// Good Paths
	@Test
	public void testGetAllPopularProducts() throws Exception {
		this.mockMvc.perform(get("/products/popular"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}
	
	@Test
	public void testGetAllPopularProductsDemo() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic?demographic=men"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}
	
	@Test
	public void testGetAllPopularProductsType() throws Exception {
		this.mockMvc.perform(get("/products/popular_type?type=shoe"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}
	
	@Test
	public void testGetAllPopularProductsCategory() throws Exception {
		this.mockMvc.perform(get("/products/popular_category?category=casual"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}
	
	@Test
	public void testGetAllPopularProductsDemoType() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic_type?demographic=men&type=shoe"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}
	
	@Test
	public void testGetAllPopularProductsDemoCategory() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic_category?demographic=men&category=casual"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(4)));
	}

	//Bad Paths
	@Test 
    public void testBadGetAllPopularProducts() throws Exception {
        this.mockMvc.perform(get("/products/popularrr"))
        .andExpect(status().isNotFound());
    }
	
	@Test
	public void testBadGetAllPopularProductsDemo() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic?demographic=dog"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testBadGetAllPopularProductsType() throws Exception {
		this.mockMvc.perform(get("/products/popular_type?type=leggings"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testBadGetAllPopularProductsCategory() throws Exception {
		this.mockMvc.perform(get("/products/popular_category?category=beach"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testBadGetAllPopularProductsDemoType() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic_type?demographic=dog&type=leggings"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testBadGetAllPopularProductsDemoCategory() throws Exception {
		this.mockMvc.perform(get("/products/popular_demographic_category?demographic=dog&category=beach"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	//New Product Tests
	//Happy Path

	@Test
	public void testGetNewPurchases() throws Exception {
		this.mockMvc.perform(get("/products/new"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(2)));
	}
	
	@Test
	public void testGetNewProductsByDemographic() throws Exception {
		this.mockMvc.perform(get("/products/new/women"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(2)));
	}
	
	@Test
	public void testGetNewProductsByType() throws Exception {
		this.mockMvc.perform(get("/products/new/women/shoe"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(2)));
	}
	
	@Test
	public void testGetNewProductsByCategory() throws Exception {
		this.mockMvc.perform(get("/products/new/category/formal"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(2)));
	}
	
	//Sad Path
	@Test
	public void testSadGetNewPurchases() throws Exception {
		this.mockMvc.perform(get("/products/newww"))
		.andExpect(status().isNotFound());
	}
	
	@Test
	public void testSadGetNewProductsByDemographic() throws Exception {
		this.mockMvc.perform(get("/products/new/people"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testSadGetNewProductsByType() throws Exception {
		this.mockMvc.perform(get("/products/new/women/shoes"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}
	
	@Test
	public void testSadGetNewProductsByCategory() throws Exception {
		this.mockMvc.perform(get("/products/new/category/formally"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("$", hasSize(0)));
	}

}
