// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");


// Function to add a task
function addTask() {
    let taskText=taskInput.value.trim();
    let li=document.createElement("li");
    // take task text
    li.textContent=taskText;
    taskList.appendChild(li);
    // Append task

    // Clear input
    taskInput.value="";
}

// Event Listener
addTaskButton.addEventListener("click", addTask);