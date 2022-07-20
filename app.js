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

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    element = document.getElementById(id);
    const headerHeight = header.getBoundingClientRect().height;
    const fixedHeader = header.classList.contains(".fixed-header");
    let position = element.offsetTop - headerHeight;

    if (!fixedHeader) {
      position = position - headerHeight;
    }
    window.scrollTo({ left: 0, top: position });
  });
});
