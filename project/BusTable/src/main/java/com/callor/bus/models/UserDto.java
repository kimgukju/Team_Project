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
	private String bu_id;			//	VARCHAR(50)
	private String bu_name;			//	VARCHAR(10)
	private String bu_password;		//	VARCHAR(12)
	private String bu_tel;			//	VARCHAR(13)
	
	private String id;
	private String name;
}
