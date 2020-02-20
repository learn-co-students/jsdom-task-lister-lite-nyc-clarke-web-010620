document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  form.append

  form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const li = document.createElement("li")
    const button = document.createElement("button")

    button.innerText = "Delete"
    button.id = `delete-button-${event.target[0].value}`
    li.innerText = event.target[0].value
    li.backgroundColor = ""
    li.appendChild(button)
    button.addEventListener("click", event => {

      event.target.parentNode.remove()
  
    })

    const ul = document.getElementById("tasks")
    ul.append(li)
  })

  


});
