document.addEventListener("DOMContentLoaded", () => {
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const mainviewForm = document.getElementById("mainview");

  const stopAni_str = document.getElementById("stop-image-str");
  const stopAni_end = document.getElementById("stop-image-end");
  const moveAni = document.getElementById("moving-image");

  const bookmarkLink = document.getElementById("bookmark");
  // 최초페이지 실행(즐겨찾기에서 넘어올시)
  if (scode !== "default" && ecode !== "default") {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    // 출발 드롭다운 데이터
    while (select1.options.length > 1) {
      select1.removeChild(select1.lastChild);
    }

    let url = `${rootPath}/searchbus/loadDepTer`;
    const loadDep = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      result.forEach((depTer) => {
        // 새로운 옵션을 생성
        const newOption = document.createElement("option");
        newOption.value = `${depTer.tl_depTerId}`; // 새로운 옵션의 값 설정
        newOption.textContent = `${depTer.depTerName}`; // 새로운 옵션의 텍스트 설정

        // 새로운 옵션을 select 요소에 추가
        select1.appendChild(newOption);
      });
      select1.value = scode;
      title_left.textContent =
        select1.options[select1.selectedIndex].textContent;
    };
    loadDep();
    select1.value = scode;
    // 도착 드롭다운 데이터
    while (select2.options.length > 1) {
      select2.removeChild(select2.lastChild);
    }
    url = `${rootPath}/searchbus/loadArrTer?depTerId=` + scode;
    const loadArr = async () => {
      const response = await fetch(url);
      const result = await response.json();
      result.forEach((arrTer) => {
        // 새로운 옵션을 생성
        const newOption = document.createElement("option");
        newOption.value = `${arrTer.tl_arrTerId}`; // 새로운 옵션의 값 설정
        newOption.textContent = `${arrTer.arrTerName}`; // 새로운 옵션의 텍스트 설정

        // 새로운 옵션을 select 요소에 추가
        select2.appendChild(newOption);
      });
      select2.value = ecode;

      title_right.textContent =
        select2.options[select2.selectedIndex].textContent;
    };
    loadArr();
    select2.value = ecode;
    // 리스트 데이터
    mainviewForm.style.display = "flex";

    const title_left = document.getElementById("title_left");
    const title_right = document.getElementById("title_right");

    url = `${rootPath}/searchbus/loadSchedule?depTerId=${scode}&arrTerId=${ecode}`;

    const loadSchedule = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      // result 로 화면그리기, 출발시간 + 소요시간 = 도착시간 계산
      const list_body = document?.getElementById("list_body");

      // 내용 삭제
      while (list_body.firstChild) {
        list_body.removeChild(list_body.firstChild);
      }

      result.forEach((drive) => {
        const trElement = document?.createElement("tr");
        trElement.classList.add("list_index_body");

        // 새로운 span 요소들을 생성하고 내용을 설정
        const td1 = document.createElement("td");
        td1.textContent = `${drive.tes_schedule}`;

        const td2 = document.createElement("td");
        td2.textContent = returnArrTime(
          `${drive.tes_schedule}`,
          `${drive.td_wasteTime}`
        );

        const td3 = document.createElement("td");
        td3.textContent = `${drive.td_fare}`;

        const td4 = document.createElement("td");
        // 비교문 실행 후 이미지 삽입
        const isclose = `${drive.closet}`;

        if (isclose === "true") {
          td4.textContent = "◀";
        } else if (isclose === "false") {
          td4.textContent = " ";
        }

        // 생성한 span 요소들을 div 요소에 추가
        trElement.appendChild(td1);
        trElement.appendChild(td2);
        trElement.appendChild(td3);
        trElement.appendChild(td4);

        // 생성한 div 요소를 list_body 요소에 추가
        list_body.appendChild(trElement);
      });
    };
    loadSchedule();
    animationPlay();
  }

  // 옵션박스 출발터미널 선택시
  const inputDepTer = async () => {
    let depValue = select1.value;
    // 컨트롤러에게 DepValue 값 보내고 select2 에 옵션추가
    // rootPath 변수 추가해줘야됨
    while (select2.options.length > 1) {
      select2.removeChild(select2.lastChild);
    }
    const url = `${rootPath}/searchbus/loadArrTer?depTerId=${depValue}`;
    if (depValue !== "str_default") {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      result.forEach((arrTer) => {
        // 새로운 옵션을 생성
        const newOption = document.createElement("option");
        newOption.value = `${arrTer.tl_arrTerId}`; // 새로운 옵션의 값 설정
        newOption.textContent = `${arrTer.arrTerName}`; // 새로운 옵션의 텍스트 설정

        // 새로운 옵션을 select 요소에 추가
        select2.appendChild(newOption);
      });
    }
  };

  // 옵션박스 도착터미널 선택시
  const inputDepTerAndArrTer = async () => {
    if (select1.value !== "str_default" && select2.value !== "end_default") {
      //   console.log("출발 정류장 ID : " + select1.value);
      //   const selectedOption1 = select1.options[select2.selectedIndex];
      //   console.log("출발 정류장 이름 : " + selectedOption1.textContent);

      //   console.log("도착 정류장 ID : " + select2.value);
      //   const selectedOption2 = select2.options[select2.selectedIndex];
      //   console.log("도착 정류장 이름 : " + selectedOption2.textContent);
      mainviewForm.style.display = "flex";

      const title_left = document.getElementById("title_left");
      const title_right = document.getElementById("title_right");

      title_left.textContent =
        select1.options[select1.selectedIndex].textContent;
      title_right.textContent =
        select2.options[select2.selectedIndex].textContent;

      const depValue = select1.value;
      const arrValue = select2.value;

      const url = `${rootPath}/searchbus/loadSchedule?depTerId=${depValue}&arrTerId=${arrValue}`;
      console.log(url);
      const response = await fetch(url);
      const result = await response.json();
      // result 로 화면그리기, 출발시간 + 소요시간 = 도착시간 계산
      const list_body = document?.getElementById("list_body");

      // 내용 삭제
      while (list_body.firstChild) {
        list_body.removeChild(list_body.firstChild);
      }

      console.log(result);

      result.forEach((drive) => {
        const trElement = document?.createElement("tr");
        trElement.classList.add("list_index_body");

        // 새로운 span 요소들을 생성하고 내용을 설정
        const td1 = document.createElement("td");
        td1.textContent = `${drive.tes_schedule}`;

        const td2 = document.createElement("td");
        td2.textContent = returnArrTime(
          `${drive.tes_schedule}`,
          `${drive.td_wasteTime}`
        );

        const td3 = document.createElement("td");
        td3.textContent = `${drive.td_fare}`;

        const td4 = document.createElement("td");
        // 비교문 실행 후 이미지 삽입
        const isclose = `${drive.closet}`;

        if (isclose === "true") {
          td4.textContent = "◀";
        } else if (isclose === "false") {
          td4.textContent = " ";
        }

        // div 테두리 표시해주고 마무리

        // 생성한 span 요소들을 div 요소에 추가
        trElement.appendChild(td1);
        trElement.appendChild(td2);
        trElement.appendChild(td3);
        trElement.appendChild(td4);

        // 생성한 div 요소를 list_body 요소에 추가
        list_body.appendChild(trElement);
      });
    }
  };

  function animationPlay() {
    mainviewForm.style.display = "flex";

    stopAni_str.style.display = "flex";
    stopAni_end.style.display = "flex";
    moveAni.style.display = "flex";

    stopAni_str.style.animationPlayState = "running";
    stopAni_end.style.animationPlayState = "running";
    moveAni.style.animationPlayState = "running";
  }

  function animationStop() {
    mainviewForm.style.display = "none";

    stopAni_str.style.display = "none";
    stopAni_end.style.display = "none";
    moveAni.style.display = "none";

    stopAni_str.style.animationPlayState = "paused";
    stopAni_end.style.animationPlayState = "paused";
    moveAni.style.animationPlayState = "paused";
  }

  //즐겨찾기 등록
  const bookmark = async () => {
    const depTerId = select1.value;
    const arrTerId = select2.value;
    const depTerName = select1.options[select1.selectedIndex].textContent;
    const arrTerName = select2.options[select2.selectedIndex].textContent;

    if (depTerId !== "str_default" && arrTerId !== "end_default") {
      const url = `${rootPath}/bookmark?depTerId=${depTerId}&arrTerId=${arrTerId}&depTerName=${depTerName}&arrTerName=${arrTerName}`;
      const response = await fetch(url);
      const result = await response.json();
      const message = result.message;
      alert(message);
    } else {
      alert("출발지와 도착지를 선택해주세요");
      return false;
    }
  };

  // 유효성 검사 및 애니매이션 재생
  function handleChange() {
    if (select1.value === "str_default") {
      alert("첫 번째 선택지를 먼저 선택해주세요.");
      mainviewForm.style.display = "none";
    }
    if (select1.value !== "str_default" && select2.value !== "end_default") {
      animationPlay();
    } else {
      animationStop();
    }
    return false;
  }

  // 도착시간 처리 함수
  function returnArrTime(depTime, durTime) {
    const [depHour, depMin] = depTime.split(":").map(Number);

    // time2가 "HH:mm" 형식이 아닌 경우, 분 단위로 가정
    let durMin = Number(durTime);
    let durHour = Math.floor(durMin / 60);
    durMin %= 60;

    const totalMinute = (depHour + durHour) * 60 + depMin + durMin;

    const hours = String(Math.floor(totalMinute / 60)).padStart(2, "0");
    const minutes = String(totalMinute % 60).padStart(2, "0");
    const resultTimeString = `${hours}:${minutes}`;

    return resultTimeString;
  }

  select1.addEventListener("change", handleChange);
  select1.addEventListener("change", inputDepTer);
  select2.addEventListener("change", handleChange);
  select2.addEventListener("change", inputDepTerAndArrTer);
  if (bookmarkLink) {
    bookmarkLink.addEventListener("click", bookmark);
  }
});
