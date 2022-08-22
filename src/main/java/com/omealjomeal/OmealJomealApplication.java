package com.omealjomeal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = "classpath:datasource.properties")
public class OmealJomealApplication {

    public static void main(String[] args) {
        SpringApplication.run(OmealJomealApplication.class, args);
    }

}
