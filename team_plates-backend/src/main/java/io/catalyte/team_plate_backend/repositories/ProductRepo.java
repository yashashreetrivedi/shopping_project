package io.catalyte.team_plate_backend.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.catalyte.team_plate_backend.domain.Product;

public interface ProductRepo extends MongoRepository<Product, String> {
	// Popular Products Methods
	List<Product> findTop4ByOrderByClickedDesc();
	List<Product> findFirst4ByDemographicOrderByClickedDesc(String demographic);
	List<Product> findFirst4ByCategoryOrderByClickedDesc(String category);
	List<Product> findFirst4ByTypeOrderByClickedDesc(String type);
	List<Product> findFirst4ByDemographicAndTypeOrderByClickedDesc(String demographic, String Type);
	List<Product> findFirst4ByDemographicAndCategoryOrderByClickedDesc(String demographic, String Category);
	
	// All Products Methods
	List<Product> findAllByDemographic(String demographic);
	List<Product> findAllByDemographicAndCategory(String demographic, String category);
	List<Product> findAllByDemographicAndType(String demographic, String type);
	List<Product> findByDemographic(String demographic);
	List<Product> findByCategory(String category);
	List<Product> findByType(String type);
	
	//Newest Product Method
	List<Product> findFirst2ByOrderByDateDesc();
	List<Product> findFirst2ByDemographicOrderByDateDesc(String demographic);
	List<Product> findFirst2ByTypeOrderByDateDesc(String type);
	List<Product> findFirst2ByDemographicAndCategoryOrderByDateDesc(String demographic, String category);
	List<Product> findFirst2ByDemographicAndTypeOrderByDateDesc(String demographic, String Type);
}

