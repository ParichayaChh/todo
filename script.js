function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText == "") {
    alert("Enter a task");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;

const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
