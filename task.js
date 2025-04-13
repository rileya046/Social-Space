const inputTask = document.getElementById("task");
const addTask = document.getElementById("add-task");

addTask.addEventListener("click", () => {
    const task = inputTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <p>${task}</p>
    <button class="complete">Done</button>
    `;

    todoTask.appendChild(newTask);
    inputTask.value = "";
});

todoTask.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete")) {
        const newTask = event.target.parentElement;
        newTask.style.backgroundColor =rgb(193, 124, 13);
        event.target.disabled = true;
    }
})