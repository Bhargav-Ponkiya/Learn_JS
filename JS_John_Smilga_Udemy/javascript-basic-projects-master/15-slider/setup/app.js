// select elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  /*
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }
  */

  // working with buttons

  // next button
  if (counter === slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  // prev button
  if (counter === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// hide prev button in starting when page load as counter will be equal to 0 in starting
prevBtn.style.display = "none";
