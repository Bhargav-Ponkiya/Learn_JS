const displayButtons = (btnContainer, pages, activeIndex) => {
  const btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : "null"
    }" data-index=${pageIndex}>${pageIndex + 1}</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  btnContainer.innerHTML = btns.join("");
};

export default displayButtons;
