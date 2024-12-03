// 1) using selectors inside the element

//select element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (question1) {
      if (question1 !== question) {
        question1.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// 2) traversing the dom

/*
// select element
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btns.forEach(function (btn1) {
      const question1 = btn1.parentElement.parentElement;
      if (btn1 !== btn) {
        question1.classList.remove("show-text");
      }
    });
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
*/
