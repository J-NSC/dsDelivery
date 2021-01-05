package com.devsuperior.dsdelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdelivery.dto.OrderDTO;
import com.devsuperior.dsdelivery.service.OrderService;

@RestController
@RequestMapping(value = "/Orders")
public class ProductController {
	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List <OrderDTO>> findAll(){
		List<OrderDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
		
	}
}
