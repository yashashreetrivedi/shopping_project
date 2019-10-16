package io.catalyte.team_plate_backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.catalyte.team_plate_backend.domain.Product;
import io.catalyte.team_plate_backend.repositories.ProductRepo;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/products")
public class ProductController {
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	@Autowired 
	ProductRepo productRepo;
	
	// Popular Products methods
	@RequestMapping(value="/popular", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularProducts() {
		List<Product> popProducts = productRepo.findTop4ByOrderByClickedDesc();
		return new ResponseEntity<>(popProducts, HttpStatus.OK);
	}
	
	@RequestMapping(value="/popular_demographic", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularProductsByDemographic(@RequestParam String demographic) {
		List<Product> popProductsDemo = productRepo.findFirst4ByDemographicOrderByClickedDesc(demographic);
		return new ResponseEntity<>(popProductsDemo, HttpStatus.OK);
	}
	
	@RequestMapping(value="/popular_type", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularProductsByType(@RequestParam String type) {
		List<Product> popProductsType = productRepo.findFirst4ByTypeOrderByClickedDesc(type);
		return new ResponseEntity<>(popProductsType, HttpStatus.OK);
	}
	
	@RequestMapping(value="/popular_category", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularProductsByCategory(@RequestParam String category) {
		List<Product> popProductsCategory = productRepo.findFirst4ByCategoryOrderByClickedDesc(category);
		return new ResponseEntity<>(popProductsCategory, HttpStatus.OK);
	}
	
	@RequestMapping(value="/popular_demographic_type", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularDemographicType(@RequestParam String demographic, @RequestParam String type) {
		List<Product> popularDemoTypes = productRepo.findFirst4ByDemographicAndTypeOrderByClickedDesc(demographic, type);
		return new ResponseEntity<>(popularDemoTypes, HttpStatus.OK);
	}
	
	@RequestMapping(value="/popular_demographic_category", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getPopularDemographicCategory(@RequestParam String demographic, @RequestParam String category) {
		List<Product> popularDemoCategories = productRepo.findFirst4ByDemographicAndCategoryOrderByClickedDesc(demographic, category);
		return new ResponseEntity<>(popularDemoCategories, HttpStatus.OK);
	}
	
	// All Products Methods
	@RequestMapping(value="/all_products", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProducts() {
		return new ResponseEntity<List<Product>>(productRepo.findAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value="/all_product_demographic", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProductsDemographic(@RequestParam String demographic) {
		List<Product> allDemographicProducts = productRepo.findAllByDemographic(demographic);
		logger.debug("Popular Products: " + allDemographicProducts);
		return new ResponseEntity<>(allDemographicProducts, HttpStatus.OK);
	}
	

	@RequestMapping(value="/all_product_type", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProductsType(@RequestParam String demographic, @RequestParam String type) {
		List<Product> allProductTypes = productRepo.findAllByDemographicAndType(demographic, type);
		logger.debug("Popular Products: " + allProductTypes);
		return new ResponseEntity<>(allProductTypes, HttpStatus.OK);
	}
	
	@RequestMapping(value="/all_product_category", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getAllProductsCategory(@RequestParam String demographic, @RequestParam String category) {
		List<Product> allProductCategory = productRepo.findAllByDemographicAndCategory(demographic, category);
		logger.debug("Popular Products: " + allProductCategory);
		return new ResponseEntity<>(allProductCategory, HttpStatus.OK);
	}
	
	// Newest Products
	@RequestMapping(value="/new", method = RequestMethod.GET)
	@ApiOperation("Gets all purchases in the system.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "OK", response = Product.class) })
	public List<Product> getNewProducts() {
		return productRepo.findFirst2ByOrderByDateDesc();
	}

	@RequestMapping(value = "/new/{demographic}", method = RequestMethod.GET)
	public List<Product> getNewProductsByDemographic(@PathVariable String demographic) {
		return productRepo.findFirst2ByDemographicOrderByDateDesc(demographic);
	}

	@RequestMapping(value = "/new/{demographic}/{type}", method = RequestMethod.GET)
	public List<Product> getNewProductsByType(@PathVariable String demographic, @PathVariable String type) {
		return productRepo.findFirst2ByDemographicAndTypeOrderByDateDesc(demographic, type);
	}
	
	@RequestMapping(value = "/new/category/{demographic}/{category}", method = RequestMethod.GET)
	public List<Product> getNewProductsByCategory(@PathVariable String demographic, @PathVariable String category) {
		return productRepo.findFirst2ByDemographicAndCategoryOrderByDateDesc(demographic, category);
	}
	
}


