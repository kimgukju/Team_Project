package com.callor.bus.service;

import com.callor.bus.models.UserDto;

public interface UserService {

	public int join(UserDto userDto);

	public UserDto findId(String u_name, String u_tel);

	public UserDto findPw(String u_mail, String u_tel);

	public int ninsert(UserDto userDto);

}
