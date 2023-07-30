
create database busDB;
use busdb;
Create table tbl_bus_user(
	bu_id	VARCHAR(50)		PRIMARY KEY,
	bu_name	VARCHAR(10)	NOT NULL	,
	bu_password	VARCHAR(12)	NOT NULL	,
	bu_tel	VARCHAR(13)	NOT NULL	
);

SELECT * FROM tbl_bus_user;