const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);

  // 사용자 이름 인증시 메인이동, 그렇지 않으면 오류 콘솔 출력
  if (formData.get("username").length < 2) {
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
    formData.get("comments").length < 4 ||
    formData.get("comments").length >= 10
  ) {
    e.preventDefault();
    console.error("나기는 말을 5글자 이상 10글자 미만으로 입력하세요.");
  }

  // 비밀번호 인증 처리 (특수문자, 텍스트, 숫자 모두 포함, 5글자 이상)
  //정규표현식 /[포함시킬 특수문자]/
  const spc = /[!@#$%^&*()]/;

  //정규표현식조건.test(검사할문자열)
  //spc정규표헌식 조건으로 pwd1폼 요소의 값을 체크
  //특수 문자가 있으면 isSpc는 true, 없으면 false
  const isSpc = spc.test(formData.get("pwd1"));
});
