var inputTask = document.getElementById("taskText");
var addTask = document.getElementById("add-task");

function addTaskFunct() {
    var task = inputTask.value;
    inputTask.value = "";

    if (task == ""){
        alert("Please add a task!")
        return;
    }

    var todoTask = document.getElementById("todoTask");
    var tempList = document.createElement("ul");

    todoTask.appendChild(tempList);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
    });

    tempList.appendChild(checkbox);
    tempList.appendChild(span);
    todoTask.appendChild(tempList);

    toggleElement();
}  

addTask.addEventListener("click", addTaskFunct);

//if there is no task, to keep color aesthetics
function toggleElement() {
    const bar = document.getElementById("blank-color-3");
    var todoTask = document.getElementById("todoTask");

    const tasks = todoTask.querySelectorAll("ul")
    if (tasks.length === 0) {
        bar.style.display = "block";
    } else {
        bar.style.display = "none";
    }
}