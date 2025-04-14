const [btnSmaller, btnBigger] = document.querySelectorAll(".btns button");

let size = 16;

btnSmaller.addEventListener("click", () => {
  document.documentElement.style.fontSize = --size + "px";
});

btnBigger.addEventListener("click", () => {
  document.documentElement.style.fontSize = ++size + "px";
});
