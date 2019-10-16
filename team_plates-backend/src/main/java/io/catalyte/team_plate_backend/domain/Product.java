package io.catalyte.team_plate_backend.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="products")
public class Product {
	@Id
	private String id;
	private String name;
	private String image;
	private String demographic;
	private String description;
	private String category;
	private double price;
	private String date;
	private int clicked;
	private int quantity;
	private String type;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDemographic() {
		return demographic;
	}
	public void setDemographic(String demographic) {
		this.demographic = demographic;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getClicked() {
		return clicked;
	}
	public void setClicked(int clicked) {
		this.clicked = clicked;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", image=" + image + ", demographic=" + demographic
				+ ", description=" + description + ", category=" + category + ", price=" + price + ", date=" + date
				+ ", clicked=" + clicked + ", quantity=" + quantity + ", type=" + type + "]";
	}
	
}
