package com.reijjo.java_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JavaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaServerApplication.class, args);
	}

}
