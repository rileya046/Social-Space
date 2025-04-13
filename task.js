const inputTask = document.getElementById("task");
const addTask = document.getElementById("add-task");

addTask.addEventListener("click", () => {
    const task = inputTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <p>${task}</p>
    <button class="complete"></button>
    `;

    todoTask.appendChild(newTask);
    inputTask.value = "";
});
