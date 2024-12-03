// select elements
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  //   console.log(e.currentTarget); // gives attached element to event
  //   console.log(e.target); // gives actual target

  const id = e.target.dataset.id;

  if (id) {
    // remove active class from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // remove active class from other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
