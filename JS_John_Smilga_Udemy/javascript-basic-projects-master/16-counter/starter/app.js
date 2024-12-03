/*
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection} selector, no such element exists"`
  );
}

function Counter(element, intialValue) {
  this.counter = element;
  this.intialValue = intialValue;
  this.value = intialValue;
  this.resetBtn = element.querySelector(".reset");
  this.decreaseBtn = element.querySelector(".decrease");
  this.increaseBtn = element.querySelector(".increase");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  // 'bind' 'this' to all function
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = this.intialValue;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
*/

////////////////////////// Class Refactor /////////////////////////

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection} selector, no such element exists"`
  );
}

class Counter {
  // constructor
  constructor(element, intialValue) {
    this.counter = element;
    this.intialValue = intialValue;
    this.value = intialValue;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    // 'bind' 'this' to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    console.log(this);
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = this.intialValue;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
