package com.callor.bus.api;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.callor.bus.models.UserDto;

public class JsonParser {
	
	JSONParser jsonParser = new JSONParser();

	public UserDto changeJson(String string) throws Exception {

		HashMap<String, Object> map = new HashMap<>();
		JSONParser jsonParser = new JSONParser();
		UserDto userDto = new UserDto();

		JSONObject jsonObject = (JSONObject) jsonParser.parse(string);

		jsonObject = (JSONObject) jsonObject.get("response");

		map.put("userId", jsonObject.get("id"));
		map.put("userName", jsonObject.get("name"));

		userDto.setBu_name(map.get("userName").toString());
		userDto.setBu_id(map.get("userId").toString()); // id -> vo.email 넣기
//		userDto.setUserNaver(map.get("userId").toString());// id -> vo.naver 넣기

		return userDto;
	}

}
