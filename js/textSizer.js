const [btnSmaller, btnBigger] = document.querySelectorAll(".btns button");
const htmlEl = document.documentElement;

let size = 16;

btnSmaller.addEventListener("click", () => {
  // 글자의 기본 1rem크기가 12px 미만이 되지 않도록 처리
  if (size < 12) return;
  htmlEl.style.fontSize = --size + "px";
});

btnBigger.addEventListener("click", () => {
  // 글자의 기본 1rem크기가 20px을 초과하지 않도록 처리
  //if (size > 20) return;
  //document.documentElement.style.fontSize = ++size +'px';

  //if (size <= 20) document.documentElement.style.fontSize = ++size + "px";
  size <= 20 && (htmlEl.style.fontSize = ++size + "px");
});
