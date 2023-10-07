const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
  const task = document.createElement("li");
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("deleteButton");
  task.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    task.remove();
  });
});