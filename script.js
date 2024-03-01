const input = document.querySelector("input")
let span;
let x;
const container = document.querySelector(".container")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const body = document.querySelector("body")
const instBox = document.querySelector(".instruction-box")
const newDiv = document.querySelector(".newDiv")
const itemsLeft = document.querySelector(".items-left")
let arr = []

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    createDiv(input.value)
  }
})

function createDiv(inputValue) {

  newDiv.innerHTML += `<div class="added-div">
    <button><img src="./images/icon-check.svg" alt=""></button>
    <span class="main-span">${inputValue}</span>
    <svg class="x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
    </svg>
  </div>`
  
  const addedDiv = document.querySelectorAll(".added-div")
  let count = 0
  addedDiv.forEach(addedDiv => {
    const button = addedDiv.querySelector("button")
    
    itemsLeft.innerHTML = `${count} items left`
    button.addEventListener("click", () => {
      const span = addedDiv.querySelector("span")
      if(span.classList.contains("main-span")){
        span.classList.remove("main-span")
        span.classList.add("spanCrossed")
      }else{
        span.classList.remove("spanCrossed")
        span.classList.add("main-span")
      }
      countItems()
    })

  })
  function deleteDiv(){
    addedDiv.forEach((addedDiv) => {
      x = addedDiv.querySelector(".x")
      x.addEventListener("click", () => {
        addedDiv.remove()
        console.log(x)
      })
    })
  }
  deleteDiv()

  function countItems(){
    let count = 0
    addedDiv.forEach(addedDiv => {
      const span = addedDiv.querySelector("span")
      if(span.classList.contains("main-span")){
        count++
      }
    })
    itemsLeft.innerHTML = `${count} items left`
  }

// const addedDiv = document.querySelector(".added-div") აქ გამოვიტანე

  countItems()
  input.value = ""
}

const all = document.querySelector(".all")
const active = document.querySelector(".active")
const completed = document.querySelector(".completed")
const clearCompleted = document.querySelector(".clear-completed")  
let moonImage =  "./images/bg-desktop-dark.jpg"
let sunImage =  "./images/bg-desktop-light.jpg"
  moon.addEventListener("click", () => {
    if(moon.style.display = "block"){
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

      // newDiv.style.backgroundColor = "#25273D";  1
      // addedDiv.style.backgroundColor = "#25273D";  2

    } else {
      moon.style.display = "block"
      sun.style.display = "none"
    }
  })
  sun.addEventListener("click", () => {
    if(sun.style.display = "block"){
      sun.style.display = "none";
      moon.style.display = "block";
      body.style.backgroundColor = "white";
      document.body.style.backgroundImage = 'url(' + sunImage + ')';
      
      input.style.backgroundColor = "#fff";
      
      itemsLeft.style.color = "#9495A5;";
      all.style.color = "#9495A5;";
      active.style.color = "#9495A5;";
      completed.style.color = "#9495A5;";
      clearCompleted.style.color = "#9495A5;";
      instBox.style.backgroundColor = "#FFF";
      
    } else {
      sun.style.display = "block"
      moon.style.display = "none"
    }
  })

