package com.callor.bus.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.callor.bus.models.UserDto;

public interface UserDao {
	
//	@Select("SELECT * FROM tbl_user "
//			+ " WHERE u_name = #{u_name} AND u_tel = #{u_tel}")
//	public UserDto findById(@Param("u_name") String u_name, @Param("u_tel") String u_tel);
//	
//	@Select("SELECT * FROM tbl_user"
//			+ " WHERE u_mail = #{u_mail} AND u_tel = #{u_tel}")
//	public UserDto findByPw(@Param("u_mail") String u_mail, @Param("u_tel") String u_tel);
	
	public int insert(UserDto userDto);
	
	public int ninsert(UserDto userDto);

}
