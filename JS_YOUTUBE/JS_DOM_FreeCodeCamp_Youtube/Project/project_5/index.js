
// Variables

const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");


// Add Task 
addTask.addEventListener("click", function () {
    
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add("checkTask");
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add("deleteTask");
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("Please Enter Value");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

})


// Check Button
taskContainer.addEventListener("click", function (e) {

    if (e.target.classList.contains("checkTask") ) {
        e.target.previousElementSibling.style.fontSize = "10px";
    }

    if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.previousElementSibling.style.fontSize = "10px";
    }

})


// Delete Button
taskContainer.addEventListener("click", function (e) {

    if (e.target.classList.contains("deleteTask")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove();
    }

})