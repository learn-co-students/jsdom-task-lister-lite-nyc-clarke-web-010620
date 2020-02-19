document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById("create-task-form")
  let textbox = document.getElementById("new-task-description")



  form.addEventListener("submit", function(event){
    addItem()
    event.preventDefault()
    textbox.value = ""
  });

  // deleteButtons.addEventListener("click", function(event){
  //   //delete fucntion will go 
  //   console.log("I was clicked")
  //   // textbox.value = ""
  // });




  let list = document.getElementById("tasks")

  let addItem = function () {
    const deleteItem = function(){ button.parentElement.remove()}

    let li = document.createElement("li")
    let button = document.createElement("button")
    button.innerText = "X"
    button.className = "Delete"
    li.innerText = textbox.value
    list.append(li)
    li.append(button)
    button.addEventListener("click",function(event){deleteItem()
    })
  } 

});




