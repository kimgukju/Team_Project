
create database busDB;
use busdb;
Create table tbl_bus_user(
	bu_id	VARCHAR(255)		PRIMARY KEY,
	bu_name	VARCHAR(255)	NOT NULL	,
	bu_password	VARCHAR(12)		,
	bu_tel	VARCHAR(13)	
);

SELECT * FROM tbl_bus_user;



