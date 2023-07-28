CREATE DATABASE buserDB;

USE buserDB;

CREATE TABLE tbl_user(
u_mail	VARCHAR(50)		PRIMARY KEY,
u_name	VARCHAR(10)	NOT NULL,	
u_password	VARCHAR(12)	NOT NULL,	
u_tel	VARCHAR(13)	NOT NULL	
);

DROP TABLE tbl_user;

SELECT * FROM tbl_user;

DELETE FROM tbl_user
WHERE u_mail = 'test1@naver.com';