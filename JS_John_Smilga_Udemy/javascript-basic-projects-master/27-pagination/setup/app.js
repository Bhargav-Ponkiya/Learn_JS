import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let activeIndex = 0;
let pages = [];

const setUpUI = () => {
  displayFollowers(pages[activeIndex]);
  displayButtons(btnContainer, pages, activeIndex);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = "pagination";
  pages = paginate(followers);
  setUpUI();
};

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-container")) {
    return;
  }

  if (e.target.classList.contains("page-btn")) {
    activeIndex = parseInt(e.target.dataset.index);
  }

  if (e.target.classList.contains("next-btn")) {
    activeIndex++;
    if (activeIndex > pages.length - 1) {
      activeIndex = 0;
    }
  }

  if (e.target.classList.contains("prev-btn")) {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = pages.length - 1;
    }
  }

  setUpUI();
});

window.addEventListener("load", init);
