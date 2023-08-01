<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>
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
<script src="${rootPath}/static/js/join.js?20230728-001"></script>
</head>
<body>
	<div class="wrapper">
		<h1>
			<a href="${rootPath}/">시외버스</a>
		</h1>
		<div class="signUpTitle">시외버스 회원가입</div>
		<f:form modelAttribute="USER">
			<div>
				<f:input class="form" path="bu_id"
					placeholder="이메일을 입력해주세요." />
			</div>
			<div>
				<f:input class="form" path="bu_name" placeholder="이름을 입력해 주세요." />
			</div>
			<div>
				<f:input class="form" path="bu_password" type="password"
					placeholder="비밀번호를 입력해 주세요." />
			</div>
			<div>
				<input class="form" id="bu_password2" type="password"
 					placeholder="비밀번호를 다시 입력해 주세요." /> 
			</div>
			<div>
			<f:input class="form" path="bu_tel" placeholder="휴대폰 번호를 입력하세요" />
			</div>
			<div class="divideLine"></div>
			<button type="button" id="signUp" class="signUp">가입하기</button>
		</f:form>
	</div>
</body>
</html>