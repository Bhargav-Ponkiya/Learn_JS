// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "work",
        person: "w"
    },
    {
        quote: "together",
        person: "t"
    },
    {
        quote: "slow",
        person: "s"
    },
    {
        quote: "alone",
        person: "a"
    },
    {
        quote: "fast",
        person: "f"
    },
    {
        quote: "depends",
        person: "d"
    }
];


btn.addEventListener("click", function () {
    
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText=quotes[random].person

})





















