package com.callor.bus.controller;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.callor.bus.api.JsonParser;
import com.callor.bus.models.UserDto;
import com.callor.bus.oauth.bo.NaverLoginBO;
import com.callor.bus.service.UserService;
import com.github.scribejava.core.model.OAuth2AccessToken;

@Controller
public class NaverController {
	
	protected final UserService userService;
	public NaverController(UserService userService) {
		this.userService = userService;
	}



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
    public ModelAndView callback(@RequestParam String code, @RequestParam String state, HttpSession session, UserDto userDto) throws IOException{
		OAuth2AccessToken oauthToken = naverLoginBO.getAccessToken(session, code, state);
//		String apiResult = naverLoginBO.getUserProfile(oauthToken);
		
		//테스트
		JsonParser json = new JsonParser();
		String apiResult = naverLoginBO.getUserProfile(oauthToken);
		try {
			userDto = json.changeJson(apiResult);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
		
		
		
		
		
		
		int result = userService.ninsert(userDto);
		 
        return new ModelAndView("Ncallback","result", apiResult);
    }

}
