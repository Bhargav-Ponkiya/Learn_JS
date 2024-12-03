const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`No such element exists with selection: ${selection}`);
  }
};

export default getElement;
