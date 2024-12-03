// DOM is used for manipulate content, style and structure of web page
// DOM is tree of a node

// window object contains document object as a property

// document object ---> is root node of DOM tree


// HTML Before Event Listeners

{/* <div class="container">
        <h1 id="main-heading">Favourite Movie</h1>
        <!--Comments in HTML-->
        <ul>
            <li class="list-item">list 1</li>
            <li class="list-item">list 2</li>
            <li class="list-item">list 3</li>
            <li class="list-item">list 4</li>
            <li class="list-item">list 5</li>
        </ul>
    </div> 
*/}


////////////////////// Select element /////////////////////////

/*
// ways to select elements

//getElementById()
const byID = document.getElementById("main-heading");
console.log(byID);

//getElementByClassName()
const byClass = document.getElementsByClassName("list-item");
console.log(byClass);

//getElementByTagName()
const byTag = document.getElementsByTagName("li");
console.log(byTag);

//querySelector()
const queSelClass = document.querySelector(".container");
console.log(queSelClass);
const queSelId = document.querySelector("#main-heading");
console.log(queSelId);
const queSelTag = document.querySelector("li");
console.log(queSelTag);

//querySelectorAll()
const queSelAllClass = document.querySelectorAll(".list-item");
console.log(queSelAllClass);
*/


////////////////////// Change style of element ///////////////////////////

/*

// ways to change style

const heading = document.querySelector("#main-heading");
heading.style.color = "red";         // --> inline styling

const listItems = document.querySelectorAll(".list-item");
listItems[3].style.fontSize = "2rem";

listItems.forEach(item=>item.style.color="blue")

*/


//////////////// Creating Element ////////////////////////////////


{/* <div class="container">
        <h1 id="main-heading">Favourite Movie</h1>
        <ul>
            <li class="list-item"><strong>tokyo</strong>
                list 1</li>
            <li class="list-item">list 2</li>
            <li class="list-item">list 3</li>
            <li class="list-item">list 4</li>
            <li class="list-item">list 5</li>
        </ul>
    </div> 
*/}



/*

// creating elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding element
ul.append(li);

*/


/*
// text

const first = document.querySelector("li");

console.log(first.innerText);        // give acutal text
console.log(first.textContent);       // give space also
console.log(first.innerHTML)           // give space and inner html also
*/


/*

// modifying the text

li.innerText = "new list";

// modifying Attributes and class

li.setAttribute("id", "setID");
li.removeAttribute("id");

li.setAttribute("id", "setID");
console.log(li.getAttribute("id"));

// add class
li.classList.add("newClass");

// check class
console.log(li.classList.contains("newClass"));

// remove class
li.classList.remove("newClass");

// check class
console.log(li.classList.contains("newClass"));


// remove element

li.remove();

*/



//////////////// Traversing DOM ////////////////////////////////


// Parent Node traversal

/*
const ul = document.querySelector("ul");

console.log(ul.parentNode.parentNode.parentNode.parentNode);     // output: document
console.log(ul.parentElement.parentElement.parentElement.parentElement);  // output: null

const html = document.documentElement;  // documentElement - give root node of document---> that it html
*/


// Child Node traversal

/*
const ul = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// //ul.firstChild.style.color = "red";   // output: error
// ul.childNodes[1].style.color = "red";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
*/


// Sibling Node traversal

/*
const ul = document.querySelector("ul");

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);       // if not found, output: null
*/



///////////////////// Event Listeners /////////////////////////////////


{/* <h1 id="main-heading">Event Listeners</h1>

    <div class="container">
        <div class="box-1">
            <h1 id="heading">1</h1>
            <button onclick="alert('i love js. inline js from btn1')">Enter</button>
        </div>
        <div class="box-2">
            <h1 id="heading">2</h1>
            <button class="btn2">Enter</button>
        </div>
        <div class="box-3">
            <h1 id="heading">3</h1>
            <button class="btn3">Enter</button>
        </div>
    </div> 
*/}

/*
const btn2 = document.querySelector(".btn2");

function alertBtn() {
    alert("I also love js from btn2")
}

// here, used reference function
btn2.addEventListener("click", alertBtn);


const box3 = document.querySelector(".box-3");

// here, used Anonymous function
box3.addEventListener("mouseover", function () {
   
        box3.style.backgroundColor = "red";
    
})
*/


////////////// Another Example of Event Listeners /////////////////


{/* <style>
    .hidden{
        display: none;
    }
  </style> 
*/}


/*
   <h1>Event Listeners</h1>

    <div class="container">
        <button class="reveal">Reveal More</button>
        <div class="hidden">Lorem ipsum dolor sit amet.</div>
    </div>

*/

/*
const revealBtn = document.querySelector(".reveal");
const hiddenDiv = document.querySelector(".hidden");


function toggleContent() {
    if (hiddenDiv.classList.contains("hidden")) {
        hiddenDiv.classList.remove("hidden");
    } else {
        hiddenDiv.classList.add("hidden");
    }
}

// here, used Reference function
revealBtn.addEventListener("click", toggleContent);

*/



//////////////////////// Event Propagation ////////////////////////////////

// Event Propagation ---> How event traverse through node

// below are the 3 phase of Event Propagation

// Event Capturing ---> from root to target
// Target          ---> actual target
// Event Bubbling  ---> from target to root


{/* <div class="div1">
        1
        <div class="div2">
            2
            <button style="display: block;">Click</button>
            <a href="#">When we click on link, page automatically refresh(default behaviour)</a>
        </div>
    </div> 
*/}



// Event Capturing

/*
window.addEventListener("click", function () {
    console.log("window");
},true)

document.addEventListener("click", function () {
    console.log("document");
},true)

document.querySelector(".div1").addEventListener("click", function () {
    console.log("div 1");
},true)

document.querySelector(".div2").addEventListener("click", function () {
    console.log("div 2");
},true)

document.querySelector("button").addEventListener("click", function (e) {
  console.log(e);  
}, true)
*/



// Event Bubbling  ---> by default - false(third parameter in addEventListener())

/*
window.addEventListener("click", function () {
    console.log("window");
},false)

document.addEventListener("click", function () {
    console.log("document");
},false)

document.querySelector(".div1").addEventListener("click", function (e) {
    e.stopPropagation();             // used to stop propagation after this element
    console.log("div 1");
},false)

document.querySelector(".div2").addEventListener("click", function () {
    console.log("div 2");
},false)

document.querySelector("button").addEventListener("click", function (e) {
  console.log(e);  
}, false)

document.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();                    // used to prevent default behaviour - for eg. ( 1. when we submit form, 2. when we click on anchor(a) tag or link) ---> default behaviour for 1 and 2 is page automatically get refreshed
    console.log("a - link");
})
*/




/////////////////////// Event Delegation ///////////////////////////

// It allows users to append a SINGLE event listner to a parent element that adds it to all of its present AND future descendants that match selector


{/* <ul id="sports">
        <li id="football">Football</li>
        <li id="cricket">Cricket</li>
        <li id="handball">Handball</li>
        <li id="chess">Chess</li>
        <li id="kho-kho">Kho-Kho</li>
    </ul> 
*/}

/*
// present descendants
const sports = document.querySelector("#sports");

sports.addEventListener("click", function (e) {

    console.log(e.target.getAttribute("id") + " is clicked");
    
    if(e.target.matches("li"))
    e.target.style.backgroundColor = "red";

})

// future descendants
const newSports = document.createElement("li");
newSports.setAttribute("id", "rugby");
newSports.innerText = "Rugby";

sports.appendChild(newSports);

*/







































































































