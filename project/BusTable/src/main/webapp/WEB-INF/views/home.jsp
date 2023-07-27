<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath}" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="${rootPath}/static/css/main.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap"
	rel="stylesheet" />
<script src="${rootPath}/static/js/home.js" defer></script>
</head>
<body>
<body class="slide-in">
	<div id="all">
		<div class="container">
			<div class="circle red" color="red"></div>
			<div class="circle" color="yellow"></div>
			<div class="circle" color="green"></div>
		</div>
		<div id="full">
			<div id="top">
				<div id="title_top">
					<h1>시외버스</h1>
					<h1>
						<a href="${rootPath}/login">로그인</a>
					</h1>
					<h1>
						<a href="join.html">회원가입</a>
					</h1>
				</div>
				<section>
					<article>
						<div class="select" onclick="location.href='searchBus.html';">
							<img src="etc/Korea Map Transparent.PNG" width="125px"
								height="175px" />
						</div>
						<a href="">노선 조회 </a>
					</article>
					<article>
						<div class="select" onclick="location.href='serachArea.html';">
							<img src="etc/터미널위치.png" width="125px" height="175px" />
						</div>
						<a href="serachArea.html"> 터미널 위치 조회 </a>
					</article>
					<article>
						<div class="select" onclick="location.href='usuallyBus.html';">
							<img src="etc/즐겨찾기.png" width="125px" height="175px" />
						</div>
						<a href="usuallyBus.html">즐겨찾기 </a>
					</article>
					<article>
						<div class="select"
							onclick="location.href='https://www.usquare.co.kr/kor/usquare/reservation.do?mode=reservationList&srCategoryId1=9';">
							<img src="etc/bus.png" width="125px" height="175px" />
						</div>
						<a
							href="https://www.usquare.co.kr/kor/usquare/reservation.do?mode=reservationList&srCategoryId1=9">예매
							사이트 이동</a>
					</article>
				</section>
			</div>
			<div class="line"></div>
			<div class="line"></div>
			<div id="light"></div>
		</div>
		<div id="bottom">
			<div id="front"></div>
			<div id="back"></div>
		</div>
	</div>
</body>

</body>
</html>