package com.reijjo.java_server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/todos")
public class TodoController {
	@Autowired
	private TodoService todoService;

	@GetMapping
	public ResponseEntity<List<Todos>> getAllTodos() {
		return new ResponseEntity<List<Todos>>(todoService.allTodos(), HttpStatus.OK);
	}
}
