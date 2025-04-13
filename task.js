const inputTask = document.getElementById("taskText");
const addTask = document.getElementById("add-task");
var todoTask = document.getElementById("todoTask");

addTask.addEventListener("click", () => {
    const task = inputTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <p>${task}</p>
    <button class="complete">Done</button>
    `;

    const complete = newTask.querySelector(".complete");
    complete.addEventListener("click", () => {
        newTask.remove();
    });

    todoTask.appendChild(newTask);
    inputTask.value = "";
});