package com.callor.bus.oauth.bo;

import javax.servlet.http.HttpSession;

import com.callor.bus.oauth.model.NaverLoginApi;
import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.oauth.OAuth20Service;

public class NaverLoginBO {
	
	private final static String CLIENT_ID = "";
	private final static String CLIENT_SECRET = "";
	private final static String REDIRECT_URI = "http://localhost:8080/bus/Ncallback";
	
	/* 네아로 인증  URL 생성  Method */
	public String getAuthorizationUrl(HttpSession session) {

		/* Scribe에서 제공하는 인증 URL 생성 기능을 이용하여 네아로 인증 URL 생성 */
		OAuth20Service oauthService = new ServiceBuilder()
				.apiKey(CLIENT_ID)
				.apiSecret(CLIENT_SECRET)
				.callback(REDIRECT_URI)
				.state("RANDOM_STRING")
				.build(NaverLoginApi.instance());

		return oauthService.getAuthorizationUrl();
	}

}
