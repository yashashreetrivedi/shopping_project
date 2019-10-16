package io.catalyte.team_plate_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.catalyte.team_plate_backend.domain.Product;
import io.catalyte.team_plate_backend.repositories.ProductRepo;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/customer")
public class CustomerRoutesController {
	
	@Autowired 
	ProductRepo productRepo;
	
	/**
	 * Returns a list of products. This method will only work if someone is logged in and in the customer role
	 * @return a response entity that holds the list of products and a 200 status code
	 */
	@PreAuthorize("hasRole('Customer')")
	@RequestMapping(value="/products", method = RequestMethod.GET)
	@ApiOperation("Gets the test product data. Should only return one document. "
			+ "Also used to test the route security. Only a logged in customer should be able to access this")
	@ApiResponses(value = {@ApiResponse(code = 200, message = "OK", responseContainer = "List", response = Product.class)})
	public ResponseEntity<List<Product>> getProducts() {
		List<Product> products = productRepo.findAll();
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
	}
}
