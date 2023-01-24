function addTask() {
    // Obtener valores del formulario
    var taskName = document.getElementById("task-name").value;
    var taskDate = document.getElementById("task-date").value;
    var taskCategory = document.getElementById("task-category").value;
  
    // Crear elemento li para mostrar la tarea
    var taskItem = document.createElement("li");
    taskItem.innerHTML = taskName + " | " + taskDate + " | " + taskCategory;
  
    // Añadir tarea a la lista
    var taskList = document.getElementById("task-list").getElementsByTagName("ul")[0];
    taskList.appendChild(taskItem);
  }
  