function addTask() {
  const textInput = document.getElementById("taskText");
  const dateInput = document.getElementById("taskDateTime");

  const taskText = textInput.value.trim();
  const taskTime = dateInput.value;

  if (!taskText || !taskTime) {
    alert("Please enter both task and date/time");
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;

  const actionDiv = document.createElement("div");
  actionDiv.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskText);
    if (newText) {
      taskSpan.innerHTML = `<strong>${newText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actionDiv.append(completeBtn, editBtn, deleteBtn);
  li.append(taskSpan, actionDiv);
  document.getElementById("taskList").appendChild(li);

  textInput.value = "";
  dateInput.value = "";
}
