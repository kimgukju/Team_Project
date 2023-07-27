const INPUT_INDEX = {
  EMAIL: 0,
  WRITER: 1,
  PASSWORD: 2,
  RE_PASSWORD: 3,
  PHONE: 4,
};

document.addEventListener("DOMContentLoaded", () => {
  const join = () => {
    const join_inputs = document.querySelectorAll(".wrapper input");
    // 이메일 항목 + 이메일 형식
    const input_email = join_inputs[INPUT_INDEX.EMAIL].value;
    if (!input_email) {
      alert("이메일은 필수 항목입니다");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }
    const email_check =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email_check.test(input_email)) {
      alert("이메일 형식을 확인해주세요(ABC@XXXX.XXX)");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }
    //이름 항목
    if (!join_inputs[INPUT_INDEX.WRITER].value) {
      alert("이름은 필수 항목입니다");
      join_inputs[INPUT_INDEX.WRITER].focus();
      return false;
    }
    // 비밀번호 항목 + 비밀번호 형식
    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("비밀번호는 필수 항목입니다");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    const password_check = /^[A-Za-z0-9]{6,12}$/;
    if (!password_check.test(input_password)) {
      alert(
        "비밀번호는 영문자와 숫자를 포함하여 6 ~ 12 자리 형식으로 검사하세요"
      );
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    // 비밀번호 확인 항목
    const input_re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!input_re_password) {
      alert("비밀번호 확인은 필수 항목입니다");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
    if (input_password !== input_re_password) {
      alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다");
      join_inputs[INPUT_INDEX.PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    // 휴대폰 번호 확인 항목 + 형식 확인
    const input_phone = join_inputs[INPUT_INDEX.PHONE].value;
    if (!input_phone) {
      alert("휴대폰 번호 확인은 필수 항목입니다");
      join_inputs[INPUT_INDEX.PHONE].focus();
      return false;
    }
    const phone_check = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!phone_check.test(input_phone)) {
      alert("휴대폰 번호 형식을 확인해주세요(XXX-XXX-XXXX)");
      join_inputs[INPUT_INDEX.PHONE].focus();
      return false;
    }

    // const select = document.getElementById("area").value;
    if (!document.getElementById("area").value) {
      alert("지역을 선택해주세요");
      area.focus();
      return false;
    }
    const radio_check = document.querySelector(
      "input[type=radio][name=gender]:checked"
    );
    if (!radio_check) {
      alert("성별을 선택해주세요");
      return false;
    }

    // 조건 다 충족시 + login 창이동
    alert("회원가입완료!");
    window.location.href = "login.html";
  };
  document.querySelector("#signUp").addEventListener("click", join);
});
