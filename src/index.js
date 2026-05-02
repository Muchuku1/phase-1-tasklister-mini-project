document.addEventListener("DOMContentLoaded", () => {
  // your code here

 const form = document.getElementById('create-task-form')

function buildToDo(task) {
  const taskList = document.getElementById('tasks')

  const li = document.createElement('li')
  li.textContent = task

  taskList.appendChild(li)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const input = document.getElementById('new-task-description')

  const task = input.value

  buildToDo(task)

  // optional cleanup (safe)
  input.value = ''
})
});
