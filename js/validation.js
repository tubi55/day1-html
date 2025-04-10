// js로 인증 처리할 폼요소 변수에 할당
const form = document.querySelector("form");
const username = form.querySelector("#username");
const pwd1 = form.querySelector("#pwd1");
const pwd2 = form.querySelector("#pwd2");
const email = form.querySelector("#email");
const edu = form.querySelector("#edu");
const comments = form.querySelector("#comments");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const colors = form.querySelectorAll("input[type='checkbox']:checked");

  if (colors.length === 0) {
    console.error("체크된 요소가 없습니다.");
    return;
  }

  console.log(colors); // ['red','green']

  colors.forEach((data, index) => {
    console.log(data.value);
  });
});
