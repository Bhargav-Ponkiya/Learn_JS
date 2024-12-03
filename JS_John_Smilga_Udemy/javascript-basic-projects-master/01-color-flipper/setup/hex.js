const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomHexValue = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    randomHexValue += hex[randomNumber];
  }
  document.body.style.backgroundColor = randomHexValue;
  color.textContent = randomHexValue;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
