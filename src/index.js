document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //Find element we will be working 
  //Add event listener to the element 
  //prevent page from refreshing by applying Event.preventDefault
  //when an event happens, listen for the response. 

  
//The deliverables require you to handle an event 
//in a form based on clicking a submit button. 
//You're going to need to listen for a submit event on the <form> element.

let form = document.getElementById('create-task-form')
let input = document.getElementById('new-task-description')
let ul = document.getElementById('tasks')

form.addEventListener("submit", function(event) {
event.preventDefault()
let li = document.createElement("li")
li.innerHTML = input.value
ul.append(li)
input.value = " "
let deletebutton = document.createElement("button")
deletebutton.innerHTML = "&#10007"
li.insertAdjacentElement("beforeend",deletebutton)
deletebutton.setAttribute("data-purpose", "delete");
})



ul.addEventListener("click",event => {
  console.dir(event.target)
  if(event.target.dataset.purpose === "delete"){

  event.target.parentNode.remove()

}


})








});
