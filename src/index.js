document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector('ul');
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = event.target[0].value;
    
    const button = document.createElement('button');
    button.innerText = "x";
    button.id = `${event.target[0].value}`
    li.appendChild(button);
    ul.appendChild(li);
  })

  


  deleteButton.addEventListener('click', function(event) {
    event.preventDefault();
    deleteTarget = event.target.parentNode;
    ul.removeChild(deleteTarget);
  })


});
