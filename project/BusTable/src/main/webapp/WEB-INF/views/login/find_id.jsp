<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>여긴 나의 아이디다</title>
</head>
<body>
	<c:choose>
		<c:when test="${empty F_ID }">
			<div>정보 없음</div>
		</c:when>
		<c:otherwise>
			<div>내 아이디 : ${F_ID.u_mail} </div>
		</c:otherwise>
	</c:choose>
	
</body>
</html>