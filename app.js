const links = document.querySelector("#menu");
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
  links.classList.toggle("active");
})