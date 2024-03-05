const input = document.querySelector("input")

const container = document.querySelector(".container")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const body = document.querySelector("body")
const instBox = document.querySelector(".instruction-box")
const newDiv = document.querySelector(".newDiv")
const itemsLeft = document.querySelector(".items-left")
const addedDiv = document.querySelectorAll(".added-div")

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
  
  allTodos(tasks)
}
function allTodos(item){
  newDiv.innerHTML = ""
  item.forEach((tasksItem, index) => {
    newDiv.innerHTML += `<div class="added-div ${sun.style.display == "block"? "added-background": null}">
    <button><img src="./images/icon-check.svg" alt=""></button>
    <span class="main-span ${tasksItem.completed ? "spanCrossed" : null}">${tasksItem.todo}</span>
    <svg class="x" onclick="removeTask(${index})" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
    </svg>
  </div>`

  const addedDiv = document.querySelectorAll(".added-div")
  addedDiv.forEach((addedDiv, index) => {
    const button = addedDiv.querySelector("button")
    const span = addedDiv.querySelector("span")
    
    button.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed
      allTodos(tasks)
})
  })
  })
  itemsLeft.innerHTML = `${tasks.length} items left`
}
const all = document.querySelector(".all")
const active = document.querySelector(".active")
const completed = document.querySelector(".completed")
const clearCompleted = document.querySelector(".clear-completed")

all.addEventListener("click", () => {
  allTodos(tasks)
})

active.addEventListener("click", () =>{
  const activeTask = tasks.filter(task => task.completed === false)
  allTodos(activeTask)
  console.log(activeTask)
  itemsLeft.innerHTML = `${activeTask.length} items left`
})

completed.addEventListener("click", ()=>{
  const completedTask = tasks.filter(task => task.completed !== false)
  allTodos(completedTask)
  console.log(completedTask)
  itemsLeft.innerHTML = `${completedTask.length} items left`
})

function deleteDivs(){
  addedDiv.forEach(div => {
    tasks = []
    newDiv.innerHTML = ""
  })
}

clearCompleted.addEventListener("click", () => {
  const addedDiv = document.querySelectorAll(".added-div")
  addedDiv.forEach(div => {
    div.remove()
  })
  tasks = []
  itemsLeft.innerHTML = `${tasks.length} items left`
})


function removeTask(index) {
  tasks.splice(index, 1)
  allTodos(tasks)
}


let moonImage =  "./images/bg-desktop-dark.jpg"
let sunImage =  "./images/bg-desktop-light.jpg"
moon.addEventListener("click", () => {
  if(moon.style.display === "block"){
    moon.style.display = "none";
    sun.style.display = "block";
    body.style.backgroundColor = "#171823";
    input.style.backgroundColor = "#25273D";
    input.style.color = "#C8CBE7";
    document.body.style.backgroundImage = 'url(' + moonImage + ')';
    itemsLeft.style.color = "#C8CBE7";
    all.style.color = "#C8CBE7";
    active.style.color = "#C8CBE7";
    completed.style.color = "#C8CBE7";
    clearCompleted.style.color = "#C8CBE7";
    instBox.style.backgroundColor = "#25273D";
    newDiv.style.backgroundColor = "#25273D";
    const addedDivs = document.querySelectorAll(".added-div");
    addedDivs.forEach(div => {
      div.classList.add("added-background");
    });
    
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
  }
})

  sun.addEventListener("click", () => {
    if(sun.style.display === "block"){
      sun.style.display = "none";
      moon.style.display = "block";
      body.style.backgroundColor = "white";
      document.body.style.backgroundImage = 'url(' + sunImage + ')';
      
      all.style.color = "#9495A5";
      active.style.color = "#9495A5";
      completed.style.color = "#9495A5";
      clearCompleted.style.color = "#9495A5";
      input.style.backgroundColor = "#fff";
      input.style.color = "#C8CBE7";
      instBox.style.backgroundColor = "#FFF";
      const addedDivs = document.querySelectorAll(".added-div");
      addedDivs.forEach(div => {
      div.classList.remove("added-background");
    });
      
    } else {
      sun.style.display = "block";
      moon.style.display = "none";
    }
  })














