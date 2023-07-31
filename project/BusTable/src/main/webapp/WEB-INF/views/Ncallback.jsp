<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>네이버 로그인 연습</title>
</head>
<body>
	<div style="text-align:center"><strong>로그인된 정보</strong>${result}</div>
	
	<div><a href = "${rootPath}">홈으로</a></div>
	
</body>
</html>