////////////////////////// AJAX, HTTP, API ///////////////////////////////////////////////////

// AJAX - Asynchronous JavaScript And XML(nowdays JSON format used instead of XML)
// HTTP Request - Communication between client and server
// API - Application Programming Interface - Rules for communication

//////////////////////////////////////////////////////////////////////////////////
//////////////////////// XMLHttpRequest() ////////////////////////////////////////

// Provided by BROWSER
// XMLHttpRequest(XHR) objects are used to interact with servers.
// We can retrieve data from a URL without having to do a full page refresh.
// Can be used to retrieve any Type of Data, not just XML.

/*
const btn = document.querySelector(".btn");

///////////////// Add Button ///////////////////

// We can retrieve data from a URL without having to do a full page refresh.

btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const url = "./api/sample.txt";

  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // open() - initialize a newly-created request, or re-initializes an existing one.

  xhr.open("GET", url);
  console.log(xhr);

  // this code will be taken by BROWSER
  // callback function will invoke/run when ready state changes
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        readyState: xhr.readyState,
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  // sends the request to the server
  xhr.send();
}

console.log(
  "I will run first. Above code will not block me. Above code will be take by BROWSER. Asynchronous..."
);
*/

////////////////////////////// JSON //////////////////////////////////////////////

// JSON - JavaScript Object Notation

// SERVER can send response to BROWSER only as a TEXT

/*
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const url = "./api/person.json";

  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // open() - initialize a newly-created request, or re-initializes an existing one.

  xhr.open("GET", url);
  console.log(xhr);

  // this code will be taken by BROWSER
  // callback function will invoke/run when ready state changes
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse
      const data = JSON.parse(xhr.responseText);

      // display data
      const displayData = data.map((item) => `<p>${item.name}</p>`).join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        readyState: xhr.readyState,
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };

  // sends the request to the server
  xhr.send();
}

console.log(
  "I will run first. Above code will not block me. Above code will be take by BROWSER. Asynchronous..."
);
*/

////////////////////////////// Fetch API /////////////////////////////////////

// Fetch API - to handle AJAX Request

// Fetch - Built in --> Provided by BROWSER
// Fetch - Promised based, Fetch(url)--> return Promise

// Fetch - has simpler and cleaner syntax

/*
const url = "./api/person.json";

// return Promise
// const infoAboutFetch = fetch(url);
// console.log(infoAboutFetch);

// fetch(url)
//   .then((response) => {
//     // fetch(url) - return response object
//     //console.log(response);
//     // convert response into JSON data
//     return response.json(); // return Promise and the converted JSON data
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/

/////////////////////////////// Fetch with function //////////////////////////////

/*
const btn = document.querySelector(".btn");

const url = "./api/person.json";

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPerson(data))
    .catch((err) => console.log(err));
});

const displayPerson = (items) => {
  const displayData = items.map((item) => `<p>${item.name}</p>`).join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
*/

////////////////////////// Fetch - with async/await //////////////////////

/*
const btn = document.querySelector(".btn");

const url = "./api/person.json";

btn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayPerson(data);
});

const displayPerson = (items) => {
  const displayData = items.map((item) => `<p>${item.name}</p>`).join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
*/

//////////////////////////// Try/Catch block //////////////////////////////////

/*
const btn = document.querySelector(".btn");

const url = "./api/person.json";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPerson(data);
  } catch (err) {
    console.log(err);
  }
});

const displayPerson = (items) => {
  const displayData = items.map((item) => `<p>${item.name}</p>`).join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
*/
