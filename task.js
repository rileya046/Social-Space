var inputTask = document.getElementById("taskText");
var addTask = document.getElementById("add-task");


function addTaskFunct() {
    var task = inputTask.value;
    inputTask.value = "";

    if (task == ""){
        alert("Add task here!")
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
}  

addTask.addEventListener("click", addTaskFunct);