CREATE DATABASE buserDB;

USE buserDB;

CREATE TABLE tbl_user(
u_mail	VARCHAR(50)		PRIMARY KEY,
u_name	VARCHAR(10)	NOT NULL,	
u_password	VARCHAR(12)	NOT NULL,	
u_tel	VARCHAR(13)	NOT NULL,	
u_area	VARCHAR(10),		
u_gender	VARCHAR(2)		
);

SELECT * FROM tbl_user;