package com.devsuperior.dsdelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdelivery.dto.ProductDTO;
import com.devsuperior.dsdelivery.service.ProductService;

@RestController
@RequestMapping(value = "/Product")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List <ProductDTO>> findAll(){
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
		
	}
}
