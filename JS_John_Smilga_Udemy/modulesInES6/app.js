// Hard to navigate if all codes in one file
/*
const people = [
  { name: "john", job: "automation" },
  { name: "ross", job: "devloper" },
  { name: "joey", job: "cloud" },
  { name: "rachel", job: "sales" },
];

const container = document.querySelector(".container");
const btn = document.getElementById("btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");

  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => showPeople());
*/

/////////////////////////// Named Export /////////////////////////

/*
import { random, people } from "./utils/data.js";

console.log(random);

const container = document.querySelector(".container");
const btn = document.getElementById("btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");

  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => showPeople());
*/

////////////////////////////// Default Export /////////////////////////////////
///////////////////////// Get Element ///////////////////////

// In Named Export, name should match. Multiple export possible in Named Export
import { random, people } from "./utils/data.js";

// In Default Export, name can be anything. Only Single export possible per file in Default Export
import whatever from "./utils/showPeople.js";
import get from "./utils/getElement.js";

console.log(random);

const container = get(".container");
const btn = get("#btn");
//const btn1 = get("btn");

btn.addEventListener("click", () => (container.innerHTML = whatever(people)));
