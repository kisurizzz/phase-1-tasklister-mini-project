
document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) =>{e.preventDefault()
    createToDo(e.target['new-task-description'].value)
  })
});

function createToDo(description){
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "remove"
  let listItems = document.createElement('li');
  listItems.textContent = description;
  listItems.appendChild(btn)
  document.querySelector('#tasks').appendChild(listItems)
}
function handleDelete(e){
 e.target.parentNode.remove()
}