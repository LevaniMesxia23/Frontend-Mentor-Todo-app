const input = document.querySelector("input")
let span;

const container = document.querySelector(".container")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const body = document.querySelector("body")
const instBox = document.querySelector(".instruction-box")
const newDiv = document.querySelector(".newDiv")
const itemsLeft = document.querySelector(".items-left")

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    createDiv(input.value)
    input.value = ""
  }
})

let tasks = []


function createDiv(inputValue){
  tasks.push({
    todo: inputValue,
    completed: false
  })
  
  allTodos()
}
function allTodos(){
  newDiv.innerHTML = ""
  tasks.forEach((tasksItem, index) => {
    newDiv.innerHTML += `<div class="added-div">
    <button><img src="./images/icon-check.svg" alt=""></button>
    <span class="main-span">${tasksItem.todo}</span>
    <svg class="x" onclick="removeTask(${index})" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
    </svg>
  </div>`
  })
  itemsLeft.innerHTML = `${tasks.length} items left`
}
const all = document.querySelector(".all")
const active = document.querySelector(".active")
const completed = document.querySelector(".completed")

const addedDiv = newDiv.querySelector(".added-div")
const button = newDiv.querySelector("button")




all.addEventListener("click", () => {
  tasks.forEach(allTodos)
})

active.addEventListener("click", ()=>{
  const activeTask = tasks.filter(task => task.completed === false)
  activeTask.forEach(allTodos)
  console.log(activeTask)
  itemsLeft.innerHTML = `${activeTask.length} items left`
})

completed.addEventListener("click", ()=>{
  const completedTask = tasks.filter(task => task.completed === true)
  completedTask.forEach(allTodos)
  console.log(completedTask)
  itemsLeft.innerHTML = `${completedTask.length} items left`
})


function removeTask(index) {
  tasks.splice(index, 1)
  allTodos()
}












