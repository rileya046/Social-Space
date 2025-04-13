const inputTask = document.getElementById("taskText");
const addTask = document.getElementById("add-task");
var todoTask = document.getElementById("todoTask");


function addTaskFunct() {
//addTask.addEventListener("click", () => {
    const task = inputTask.value;
    inputTask.value = "";

    if (task == ""){
        alert("Add task here!")
        return;
    }

    var tempList = document.createElement("li");

    //li.appendChild(document.createTextNode(task));
    todoTask.appendChild(tempList);

    // creates a check box

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
    /*const task = inputTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <p>${task}</p>
    <button class="complete">Done</button>
    `;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 

    var span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
    });

    const complete = newTask.querySelector(".complete");
    complete.addEventListener("click", () => {
        newTask.remove();
    });

    todoTask.appendChild(newTask);
    inputTask.value = "";*/
//}); 
}  

addTask.addEventListener("click", addTaskFunct);