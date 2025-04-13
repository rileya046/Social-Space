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
        shipPosition();
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

function shipPosition() {
    const tasks = document.querySelectorAll('#todoTask input[type="checkbox"]');
    const done = Array.from(tasks).filter(completed => completed.checked).length;

    const ship = document.getElementById("ship");

    const positions = [
        {left:"5%", top:"250px",rotate: "rotate(-20deg)"}, // start
        { left: "30%", top: "50px", rotate: "rotate(45deg)"}, // star 1
        { left: "53%", top: "230px", rotate: "rotate(100deg)"}, // star 2
        { left: "75%", top: "100px", rotate: "rotate(-40deg)"}  // planet
    ];

    const pos = positions[Math.min(done, positions.length - 1)];

    ship.style.left = pos.left;
    ship.style.top = pos.top;
    ship.style.transform = pos.rotate;

    // 🎉 When all 3 tasks are completed
    const totalTasks = tasks.length;
    if (totalTasks === 3 && done === 3) {
        setTimeout(() => {
            const restart = confirm("Mission accomplished! 🚀 Restart and clear tasks?");
            if (restart) {
                // Clear all tasks
                document.getElementById("todoTask").innerHTML = "";
                toggleElement();

                // Reset rocket to start
                ship.style.left = positions[0].left;
                ship.style.top = positions[0].top;
            }
        }, 500); // small delay to allow final rocket movement before alert
    }
}