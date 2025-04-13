const inputTask = document.getElementById("taskText");
const addTask = document.getElementById("add-task");
var todoTask = document.getElementById("todoTask");


function addTaskFunct() {
    const task = inputTask.value;
    inputTask.value = "";

    if (task == ""){
        alert("Add task here!")
        return;
    }

    var tempList = document.createElement("li");

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
}  

addTask.addEventListener("click", addTaskFunct);