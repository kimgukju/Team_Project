<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="${rootPath}/static/css/login.css" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
      <h1><a href="index.html">시외버스</a></h1>
      <div class="loginTitle">시외버스 로그인</div>
      <input class="form" name="email" placeholder="이메일을 입력해주세요." />
      <input
        class="form"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
      />
      <div id="auto_login">
        <input type="checkbox" /><span>자동로그인</span>
      </div>
      <div class="divideLine"></div>
      <button class="login" id="login_button">로그인</button>
      <button class="login">Naver 로그인</button>
      <div class="login_etc">
        <a href="join.html">회원가입</a> |
        <a href="findIdPw.html">아이디/비번찾기</a>
      </div>
    </div>
  </body>
</html>