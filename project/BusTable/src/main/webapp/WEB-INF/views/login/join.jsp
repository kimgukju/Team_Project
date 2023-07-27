<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link href="${rootPath}/static/css/main.css" rel="stylesheet">
<link href="${rootPath}/static/css/join.css?20230728-001"
	rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap"
	rel="stylesheet" />
<script src="${rootPath}/static/js/join.js"></script>
</head>
<body>
	<div class="wrapper">
		<h1>
			<a href="${rootPath}/">시외버스</a>
		</h1>
		<div class="signUpTitle">시외버스 회원가입</div>
		<section class="user">
		<form class="join" method="post">
			<input class="form" type="text" id="u_mail"  name="u_mail" placeholder="이메일을 입력해주세요." /> <input
				class="form" id="u_name" placeholder="이름을 입력해 주세요." /> <input
				class="form" id="u_password" type="password" placeholder="비밀번호를 입력해 주세요." />
			<input class="form" id="u_password2" type="password"
				placeholder="비밀번호를 다시 입력해 주세요." /> <input class="form" id="u_tel"
				placeholder="휴대폰 번호를 입력하세요" /> <select class="area" id="area">
				<option value="">지역을 선택하세요</option>
				<option value="1">서울</option>
				<option value="2">경기</option>
				<option value="3">인천</option>
			</select>
			<div class="gender" id="gender">
				<input type="radio" name="gender" />여성 <input type="radio"
					name="gender" />남성
			</div>
			<div class="divideLine"></div>
			<button type="submit" id="signUp" class="signUp">가입하기</button>
		</form>
		</section>
	</div>
</body>
</html>