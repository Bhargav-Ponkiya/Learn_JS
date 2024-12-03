

let openBtn = document.querySelector("#open-btn");
let modelContainer = document.querySelector("#model-container");
let closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", function () {
    modelContainer.style.display= "block";
})

closeBtn.addEventListener("click", function () {
    modelContainer.style.display = "none";
})

window.addEventListener("click", function (e) {
    if (e.target === modelContainer) {
            modelContainer.style.display = "none";
    }
})


