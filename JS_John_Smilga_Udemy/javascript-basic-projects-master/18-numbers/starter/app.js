// select elements, right away convert nodeList-->Array using Spread[...] operator
const items = [...document.querySelectorAll(".number")];

// Hoisting is not possible in Arrow Function. So define it before use it
const updateCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const interval = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      element.textContent = value;
      clearInterval();
      return;
    }
    element.textContent = initialValue;
  }, 1);
};

items.forEach((item) => updateCount(item));
