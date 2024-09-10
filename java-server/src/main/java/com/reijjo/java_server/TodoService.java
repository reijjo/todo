package com.reijjo.java_server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepository;
	public List<Todos> allTodos() {
		return todoRepository.findAll();
	}
}
