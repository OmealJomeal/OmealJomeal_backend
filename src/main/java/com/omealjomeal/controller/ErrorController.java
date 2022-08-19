package com.omealjomeal.controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

    @GetMapping("/")
    public String handleError() throws Exception{
        return "index.html";
    }
}
