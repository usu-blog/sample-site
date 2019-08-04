document.write("hello from script")
const btn = document.querySelector(".button")
let counter = 0;
btn.addEventListener("click", () => {
  btn.classList.toggle("red")
})