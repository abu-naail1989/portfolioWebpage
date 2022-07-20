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

const header = document.querySelector("#header");

window.addEventListener("scroll", function () {
  const headerHeight = header.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});
