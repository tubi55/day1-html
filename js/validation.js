// js로 인증 처리할 폼요소 변수에 할당
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // form안의 모든 정보 가져오기
  const formData = new FormData(form);

  // 단일 요소는 get(name)
  console.log(formData.get("gender"));

  // 복수 요소는 getAll(name)
  console.log(formData.getAll("myColor"));
});
