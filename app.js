const form = document.querySelector("#form");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    form.submit();
  } else {
    btn.classList.remove("slide");
  }
});
