///////////////////////// Get Element ///////////////////////

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("Error with selection: " + selection);
  }
}

export default getElement;
