let list = document.querySelector(".todo-list")
let items = list.children
let emptyListMessage = document.querySelector(".empty-tasks")
let newItemForm = document.querySelector(".add-form")
let newItemTitle = newItemForm.querySelector(".add-form-input")
let taskTemplate = document.querySelector("#task-template").content
console.log(taskTemplate)
let newItemTemplate = taskTemplate.querySelector(".todo-list-item")

let save = function(){
    localStorage.setItem(`listStorage`, list.innerHTML)
}

function toggleEmptyListMessage(){
    console.log(items)
    if(items.length === 0){
        emptyListMessage.classList.remove("hidden")
    }
    else{
        emptyListMessage.classList.add("hidden")
    }
}

function addCheckHandler(item){
    let checkbox = item.querySelector(".todo-list-input")
    checkbox.addEventListener('change', function(){
        item.remove()
        toggleEmptyListMessage()
        save()
    })  
}
for(let i = 0; i < items.length; i++){
    addCheckHandler(items[i])
}

document.addEventListener("DOMContentLoaded", function(){
    let savedList = localStorage.getItem(`listStorage`)
    list.innerHTML = savedList
    for(let i = 0; i < items.length; i++){
        addCheckHandler(items[i])
    }
})

newItemForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    console.log("форма не відправилася")
    let taskText = newItemTitle.value
    console.log(taskText)
    let task = newItemTemplate.cloneNode(true)
    let taskDescription = task.querySelector("span")
    taskDescription.textContent = taskText
    addCheckHandler(task)
    list.appendChild(task)
    toggleEmptyListMessage()
    newItemTitle.value = ``
    save()
})


    








