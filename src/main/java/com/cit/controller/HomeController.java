package com.cit.controller;

import com.cit.service.SubscriberService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
    @RequestMapping(value = "/home")
    public String home(Model model){
        model.addAttribute("new","it");
        return "hello World";
    }
}