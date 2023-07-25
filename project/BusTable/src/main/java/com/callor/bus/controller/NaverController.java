package com.callor.bus.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.callor.bus.oauth.bo.NaverLoginBO;

@Controller
public class NaverController {
	
	/* NaverLoginBO */
	private NaverLoginBO naverLoginBO;

	/* NaverLoginBO */
	@Autowired
	private void setNaverLoginBO(NaverLoginBO naverLoginBO){
		this.naverLoginBO = naverLoginBO;
	}
	
	
	@RequestMapping("/Nlogin")
    public ModelAndView login(HttpSession session) {
		String naverAuthUrl = naverLoginBO.getAuthorizationUrl(session);
        return new ModelAndView("Nlogin", "url", naverAuthUrl);
    }
 
	@RequestMapping("/Ncallback")
    public ModelAndView callback() {
        String message = "Simple Callback Page";
        return new ModelAndView("Ncallback", "message", message);
    }

}
