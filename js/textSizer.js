const [btnSmaller, btnBigger] = document.querySelectorAll(".btns button");
const htmlEl = document.documentElement;

let size = 16;

btnSmaller.addEventListener("click", () => {
  if (size < 12) return;
  htmlEl.style.fontSize = --size + "px";
});

btnBigger.addEventListener("click", () => {
  size <= 20 && (htmlEl.style.fontSize = ++size + "px");
});
