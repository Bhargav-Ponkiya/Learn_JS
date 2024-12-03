// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem);

// clear all items
clearBtn.addEventListener("click", clearItems);

// load items from local storage
window.addEventListener("DOMContentLoaded", setUpItems);

// ****** FUNCTIONS **********

// add item
function addItem(e) {
  e.preventDefault();

  const itemValue = grocery.value;
  const uniqueID = new Date().getTime().toString();

  if (itemValue && !editFlag) {
    // create list item
    createListItem(uniqueID, itemValue);

    // show container
    container.classList.add("show-container");

    // display alert
    displayAlert("item added to the list", "success");

    // add to local storage
    addToLocalStorage(uniqueID, itemValue);

    // set back to default
    setBackToDefault();
  } else if (itemValue && editFlag) {
    editElement.textContent = itemValue;
    displayAlert("item edited", "success");
    // edit local storage
    editLocalStorage(editID, itemValue);
    setBackToDefault();
  } else {
    displayAlert("Please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  // remove all items
  if (items.length > 0) {
    items.forEach(function (item) {
      groceryList.removeChild(item);
    });
  }

  // hide container
  container.classList.remove("show-container");

  // display alert
  displayAlert("cleared all the list", "danger");

  // set back to default
  setBackToDefault();

  // remove whole list from local storage
  localStorage.removeItem("list");
}

// delete item
function deleteItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  const uniqueID = item.dataset.id;

  groceryList.removeChild(item);

  if (groceryList.children.length === 0) {
    container.classList.remove("show-container");
  }

  displayAlert("item removed", "danger");
  setBackToDefault();

  // remove from local storage
  removeFromLocalStorage(uniqueID);
}

// edit item
function editItem(e) {
  const item = e.currentTarget.parentElement.parentElement;

  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = item.dataset.id;
  submitBtn.textContent = "edit";
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

// add to local storage
function addToLocalStorage(id, value) {
  const groceryItem = { id, value };
  let items = getLocalStorage();

  items.push(groceryItem);
  localStorage.setItem("list", JSON.stringify(items));
}

// remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// edit in local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// get list from local storage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// localStorage API provided by browser
// setItem
// getItem
// removeItem
// clear
// send as a string
// receive as a JSON

/*
localStorage.setItem("orange", JSON.stringify(["item1", "item2"]));
localStorage.setItem("orange1", JSON.stringify(["1", "2"]));
localStorage.setItem("orange2", JSON.stringify(["a", "b"]));

const orange = JSON.parse(localStorage.getItem("orange2"));
console.log(orange);
localStorage.removeItem("orange");
localStorage.clear();
*/

// ****** SETUP ITEMS **********

// load items from local storage
function setUpItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      // create list item
      createListItem(item.id, item.value);
    });
  }

  container.classList.add("show-container");
}

// create list item
function createListItem(id, value) {
  // create element
  const item = document.createElement("article");

  // add class
  item.classList.add("grocery-item");

  // add data-id attribute
  const attr = document.createAttribute("data-id");
  attr.value = id;

  item.setAttributeNode(attr);

  item.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  const deleteBtn = item.querySelector(".delete-btn");
  const editBtn = item.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  // append child
  groceryList.appendChild(item);
}
