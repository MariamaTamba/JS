const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault();

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;

  if (title === '' || description === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.setAttribute('draggable', true);
  taskItem.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <button class="delete-btn">Eliminar</button>
  `;

  taskList.appendChild(taskItem);

  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  taskItem.addEventListener('dragstart', handleDragStart);
  taskItem.addEventListener('dragover', handleDragOver);
  taskItem.addEventListener('drop', handleDrop);
}

function deleteTask() {
  const taskItem = this.parentNode;
  taskItem.remove();
}

let draggedItem = null;

function handleDragStart() {
  draggedItem = this;
  setTimeout(() => this.style.display = 'none', 0);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop() {
  this.parentNode.insertBefore(draggedItem, this.nextSibling);
  setTimeout(() => draggedItem.style.display = 'block', 0);
}


