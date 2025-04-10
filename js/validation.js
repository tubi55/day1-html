const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);

  //문자열.trim() : 문자열 양옆의 빈 공백문제를 제거해서 정리

  // 사용자 이름 인증시 메인이동, 그렇지 않으면 오류 콘솔 출력
  if (formData.get("username").trim().length < 2) {
    e.preventDefault();
    console.error("이름은 최소 2글자 이상 입력하세요.");
  }

  //성별이 선택되어 있지 않으면 전송기능 막고 콘솔 에러 출력
  if (!formData.get("gender")) {
    e.preventDefault();
    console.error("성별을 선택하세요.");
  }

  //학력이 선택되어 있지 않으면 이하 동일
  if (!formData.get("edu")) {
    e.preventDefault();
    console.error("최종 학력을 선택하세요.");
  }

  //좋아하는 색상선택이 하나도 없으면 이하동일
  if (formData.getAll("myColor").length === 0) {
    e.preventDefault();
    console.error("좋아하는 색상을 최소 하나 이상 선택하세요.");
  }

  //남기는 말은 최소글자 5글자 이상 최대글자수 10글자 이하일때 이하동일
  if (
    formData.get("comments").trim().length < 4 ||
    formData.get("comments").trim().length >= 10
  ) {
    e.preventDefault();
    console.error("나기는 말을 5글자 이상 10글자 미만으로 입력하세요.");
  }

  // 비밀번호 인증 구현 (특수문자, 문자, 숫자 모두 포함)
  // 정규표현식(RgEx, Regular Expression)을 이용해서 특수문자, 문자, 숫자가 비밀번호에 포함되었는지 확인하는 방법

  // 입력받은 비밀번호 변수에 저장
  const pwd1 = formData.get("pwd1");

  // 테스트할 조건을 정규표현식으로 미리 설정
  const spc = /[!@#$%^&*()]/;
  const str = /[a-zA-Z]/;
  const num = /[0-9]/;

  if (!spc.test(pwd1) || !str.test(pwd1) || !num.test(pwd1)) {
    e.preventDefault();
    console.error("비밀번호에 특수문자, 문자, 숫자를 모두 포함하세요.");
  }
});
