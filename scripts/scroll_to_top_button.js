const SCROLL_TO_TOP_BUTTON = document.querySelector(".back-to-top__button");
const ROOT_ELEMENT = document.querySelector(':root');

function scrollToTop() {
    ROOT_ELEMENT.scrollTo({
        top: 0,
        behavior: "smooth"
  })
}

SCROLL_TO_TOP_BUTTON.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        SCROLL_TO_TOP_BUTTON.classList.add("active__to-top-Button");
    } else {
        SCROLL_TO_TOP_BUTTON.classList.remove("active__to-top-Button");
    }
  });