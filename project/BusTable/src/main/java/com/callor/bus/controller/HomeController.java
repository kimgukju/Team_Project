package com.callor.bus.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.callor.bus.models.UserDto;
import com.callor.bus.service.UserService;

import lombok.extern.slf4j.Slf4j;

@SessionAttributes("USER")
@Slf4j
@Controller
public class HomeController {
	
	protected final UserService userService;
	public HomeController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		return "home";
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String join() {

		return "login/join";
	}
	
	@RequestMapping(value = "/join",method = RequestMethod.POST)
	public String join(@ModelAttribute("USER") UserDto userDto,
						Model model,
						SessionStatus sessionStatus) {
		int result = userService.join(userDto);
		log.debug("회원가입 정보 {}",userDto);
		
		sessionStatus.setComplete();
		return "redirect:/login";
	}
	
	@RequestMapping(value = "/findIdPw", method = RequestMethod.GET)
	public String findIdPw() {

		return "login/findIdPw";
	}
	
	@ModelAttribute("USER")
	public UserDto newMember() {
		return UserDto.builder().build();
	}
	

}
