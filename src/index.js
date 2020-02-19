


function getValue() {
  let text = document.getElementById('new-task-description');
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  li.textContent = text.value; 
  ul.append(li);  
}

function submitTask() {
  let button = document.getElementById('babyButton');
  button.addEventListener('click', function(event) {
    event.preventDefault();
    getValue();
  })
}

    document.addEventListener("DOMContentLoaded", () => {
      submitTask();
    });