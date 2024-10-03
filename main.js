// variables
const form = document.querySelector("form");
const userInput = document.getElementById("userInput");
const taskContainer = document.getElementById("task-container");

// Function to add a new task
function addTask(event) {
  event.preventDefault(); // Prevents form from submitting and refreshing the page

  const taskText = userInput.value.trim();

  // Only add the task if the input is not empty
  if (taskText !== "") {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("done-btn");

    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    // Clear the input field after adding the task
    userInput.value = "";

    // Delete Task with animation
    deleteBtn.addEventListener("click", function () {
      taskDiv.classList.add("task-removal");
      setTimeout(() => taskContainer.removeChild(taskDiv), 300); // Wait for animation to complete
    });

    // Mark Task as Completed
    checkbox.addEventListener("click", function () {
      taskSpan.classList.toggle("completed");
    });
  }
}

// Add the event listener to the form's submit event
form.addEventListener("submit", addTask);
