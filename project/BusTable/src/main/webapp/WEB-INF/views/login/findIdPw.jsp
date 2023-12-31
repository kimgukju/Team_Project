<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ID/PW 찾기</title>
<link href="${rootPath}/static/css/findIdPw.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap"
	rel="stylesheet" />
<script src="${rootPath}/static/js/findIdPw.js"></script>
</head>
<body>
	<div class="wrapper">
		<h1>
			<a href="${rootPath}/">시외버스</a>
		</h1>
		<div class="findTitle">시외버스 ID/PW 찾기</div>

		<form class="findID" method="POST" action="${rootPath}/find_Id">
			<div class="subTitle">ID 찾기</div>
			<div>
				<input class="form" id="u_name" name="u_name"
					placeholder="이름을 입력해 주세요." />
			</div>
			<div>
				<input class="form" id="u_tel" name="u_tel"
					placeholder="휴대폰 번호를 입력해 주세요." />
			</div>
			<button type="button" class="find_button" id="find_button1">
				아이디 찾기</button>
		</form>

		<form class="findPW" method="POST" action="${rootPath}/find_Pw">
			<div class="subTitle">PASSWORD 찾기</div>
			<div>
				<input class="form" id="u_mail" name="u_mail"
					placeholder="이메일을 입력해주세요." />
			</div>
			<div>
				<input class="form" id="u_tel" name="u_tel"
					placeholder="휴대폰 번호를 입력해 주세요." />
			</div>
			<button type="submit" class="find_button" id="find_button2">
				비밀번호 찾기</button>
		</form>
	</div>

</body>
</html>