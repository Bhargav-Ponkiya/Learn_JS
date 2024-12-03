///////////////////////// Synchronous //////////////////////////////////

// JavaScript is a single threaded, synchronous language

/*
console.log("first");
boilingWater();
console.log("third");

function boilingWater() {
  console.log("Started boiling...");
  for (let i = 0; i < 1000; i++) {
    console.log("Still boiling");
  }
  console.log("Boiling done...");
}
*/

////////////////////////// Recipe Example ////////////////////////////////////

// Make Soup
// boil water 10 min
// chop carrots
// add carrots, boil for 5 min
// chop onion
// add onion, boil for 5 min

/*
boilWater(1000);
console.log("chop carrots");
boilWater(500);
console.log("chop onion");
boilWater(500);

function boilWater(time) {
  console.log("Started boiling...");
  for (let i = 0; i < time; i++) {
    console.log("Still boiling");
  }
  console.log("Boiling done...");
}
*/

////////////////////////// Asynchronous //////////////////////////////////////////

// BROWSER - provides Fetch data, Get Geolocation, setTimeout, setTimer etc Functions.
// All this function provided by BROWSER work Asynchronously
// BROWSER will take All this function, and will be given back to JS after specific time && when JS is not busy

/*
boilWater(10000);
console.log("chop carrots");
for (let i = 0; i < 10000; i++) {
  console.log("JS is still busy");
}

// BROWSER will take setTimeout() function, and will be given back to JS after specific time && when JS is NOT busy
function boilWater(time) {
  console.log("Started boiling...");
  setTimeout(() => console.log("Boiling done..."), time);
}
*/

/*
boilWater(0);
console.log("chop carrots");

function boilWater(time) {
  console.log("Started boiling...");
  setTimeout(() => console.log("Boiling done..."), time);
}
*/

///////////////////////////// Callback Hell //////////////////////////////////

// Make Soup
// boil water 10 min
// chop carrots
// add carrots, boil for 5 min
// chop onion
// add onion, boil for 5 min

/*
boilWater();
console.log("chop Carrots");

function boilWater() {
  console.log("Started boiling water...");
  setTimeout(() => {
    console.log("Water Boiling done...");
    console.log("add Carrots");
    setTimeout(() => {
      console.log("Carrots Boiling done...");
      console.log("add Onion");
      setTimeout(() => {
        console.log("Onion Boiling done...");
      }, 5000);
    }, 5000);
    console.log("chop Onion");
  }, 10000);
}
*/

/////////////////////////// Callback Hell - DOM Example ///////////////////////////////

/*
<body>
  <h1>Asynchronization</h1>
  <h1 class="one">hello world</h1>
  <h1 class="two">hello people</h1>
  <h1 class="three">hello JavaScript</h1>
  <button class="btn">change color of above 3 heading</button>
  <script src="app.js"></script>
</body>;
*/

/*
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

// Synchronous behaviour without Callback Hell
// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     heading1.style.color = "red";
//   }, 1000);
//   setTimeout(() => {
//     heading2.style.color = "green";
//   }, 2000);
//   setTimeout(() => {
//     heading3.style.color = "blue";
//   }, 1000);
// });

// Asynchronous behaviour with Callback Hell
btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
});

console.log(
  "I will run first, not blockd by above event code. As BROWSER take event function. Asynchronous..."
);
*/

/////////////////////////////// Promises /////////////////////////////////

// PROMISES - Pending, Resolved, Rejected
// Resolved - then()
// Rejected - catch()

/*
const promise = new Promise((resolve, reject) => {
  const value = true;
  if (value) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));

console.log("I will run first, not blockd by above code. Asynchronous...");
*/

//////////////////////////// Reject Example ////////////////////////////////////

/*
<body>
    <h1>Asynchronization</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello JavaScript</h1>
    <div class="img-container">
      <!-- <img
        src="https://images.pexels.com/photos/17869843/pexels-photo-17869843/free-photo-of-conifer-right-outside-open-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="image"
      /> -->
    </div>
    <button class="btn">change color of above 3 heading</button>
    <script src="app.js"></script>
  </body>
*/

/*
const imgContainer = document.querySelector(".img-container");
const btn = document.querySelector(".btn");
const url =
  "https://images.pexels.com/photos/17869843/pexels-photo-17869843/free-photo-of-conifer-right-outside-open-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

btn.addEventListener("click", () => {
  loadImage()
    .then((img) => imgContainer.appendChild(img))
    .catch((err) => console.log(err));
});

function loadImage() {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
  });
}

console.log("i will run first. not blocked by above code. Asynchronous");
*/

///////////////////////// Promises - DOM Example /////////////////////////////////////

/*
<body>
    <h1>Asynchronization</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello JavaScript</h1>
    <button class="btn">change color of above 3 heading</button>
    <script src="app.js"></script>
  </body>
*/

/*
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, heading1, "red")
    .then(() => addColor(2000, heading2, "green"))
    .then(() => addColor(1000, heading3, "blue"))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`NO such element exists: ${element}`));
    }
  });
}

console.log(
  "I will run first. As event function will be taken by BROWSER. It will Only give back when JS is not busy."
);
*/

///////////////////////////// Async/Await ////////////////////////////////////////

// function must have async keyword
// async function - return Promise
// await - only able to use in function if function have async keyword
// await -  wait till promise is settled
// error handling -  try/catch

/*
<body>
    <h1>Asynchronization</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello JavaScript</h1>
    <button class="btn">change color of above 3 heading</button>
    <script src="app.js"></script>
  </body>
*/

// // regular function
// async function someFunction() {
//   await
// }

// // arrow function
// const otherFunction = async() => {
//   await
// }

/*
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

// 1
// btn.addEventListener("click", async () => {
//   await addColor(1000, heading1, "red");
//   await addColor(2000, heading2, "green");
//   await addColor(1000, heading3, "blue");
// });

// 2
// code inside async function run sequentially
// btn.addEventListener("click", async () => {
//   const result = await addColor(1000, heading1, "red");
//   console.log(result);
//   await addColor(2000, heading2, "green");
//   await addColor(1000, heading3, "blue");
//   console.log(result);
// });

// 3
// If error come, then next code or statement will NOT execute
// btn.addEventListener("click", async () => {
//   try {
//     await addColor(1000, heading1, "red");
//     await addColor(2000, heading2, "green");
//     await addColor(1000, heading3, "blue");
//   } catch (err) {
//     console.log(`From Catch block : `, err);
//   }
// });

// 4
// async function always return Promise
// btn.addEventListener("click", async () => {
//   // Here, we able to use then(), because async function always return Promise
//   //displayColor().then((data) => console.log(data));
//   const result = await displayColor();
//   console.log(result);
// });

// // async function always return Promise
// async function displayColor() {
//   try {
//     await addColor(1000, heading1, "red");
//     await addColor(2000, heading2, "green");
//     await addColor(1000, heading3, "blue");
//   } catch (err) {
//     console.log(`From Catch block : `, err);
//   }
//   return "hello";
// }

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`NO such element exists: ${element}`));
    }
  });
}
*/
