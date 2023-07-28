package com.callor.bus.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
	private String u_mail;			//	VARCHAR(50)
	private String u_name;			//	VARCHAR(10)
	private String u_password;		//	VARCHAR(12)
	private String u_tel;			//	VARCHAR(13)
}
