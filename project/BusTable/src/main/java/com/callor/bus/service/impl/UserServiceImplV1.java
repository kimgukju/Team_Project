package com.callor.bus.service.impl;

import org.springframework.stereotype.Service;

import com.callor.bus.dao.UserDao;
import com.callor.bus.models.UserDto;
import com.callor.bus.service.UserService;

@Service
public class UserServiceImplV1 implements UserService{

	protected final UserDao userDao;
	public UserServiceImplV1(UserDao userDao) {
		this.userDao = userDao;
	}


	@Override
	public int join(UserDto userDto) {
		// TODO Auto-generated method stub
		return userDao.insert(userDto);
	}


	@Override
	public UserDto findId(String u_name, String u_tel) {
		// TODO Auto-generated method stub
		return userDao.findById(u_name, u_tel);
	}


	@Override
	public UserDto findPw(String u_mail, String u_tel) {
		// TODO Auto-generated method stub
		return userDao.findByPw(u_mail, u_tel);
	}


	@Override
	public int ninsert(UserDto userDto) {
		// TODO Auto-generated method stub
		return userDao.ninsert(userDto);
	}

}
