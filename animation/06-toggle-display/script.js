let div = document.querySelector(".div");
div.addEventListener("mouseover", () => {
  div.classList.add("visually-hidden");
  setTimeout(() => {
    div.classList.add("hidden");
  }, 1000);
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  div.classList.remove("hidden");
  setTimeout(() => {
    div.classList.remove("visually-hidden");
  }, 5);
});
