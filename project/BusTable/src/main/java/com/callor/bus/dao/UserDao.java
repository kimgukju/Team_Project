package com.callor.bus.dao;

import com.callor.bus.models.UserDto;

public interface UserDao {
	
	public UserDto findById(String email);
	
	public int insert(UserDto userDto);

}
