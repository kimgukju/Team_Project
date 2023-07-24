package com.callor.bus.controller;

import org.springframework.stereotype.Controller;

@Controller
public class NaverController {
	@RequestMapping("/login")
    public ModelAndView login() {
        String message = "Simple Login Page";
        return new ModelAndView("login", "message", message);
    }
 
    @RequestMapping("/callback")
    public ModelAndView callback() {
        String message = "Simple Callback Page";
        return new ModelAndView("callback", "message", message);
    }

}
