// variables
const addButton = document.getElementById("add-btn");
const userInput = document.getElementById("userInput");
const taskContainer = document.getElementById("task-container");

// Function to add a new task
function addTask(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const taskText = userInput.value.trim();

  // Only add the task if the input is not empty
  if (taskText !== "") {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.classList.add("done-btn");

    // Create a new span to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    taskDiv.appendChild(radioBtn);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    // Clear the input field after adding the task
    userInput.value = "";

    deleteBtn.addEventListener("click", function () {
      taskContainer.removeChild(taskDiv);
    });
    radioBtn.addEventListener("click", function () {
      taskSpan.classList.toggle("completed");
    });
  }
}

addButton.addEventListener("click", addTask);
