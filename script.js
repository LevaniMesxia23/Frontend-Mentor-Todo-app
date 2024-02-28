const input = document.querySelector("input")
const button = document.querySelector("button")
let span;
let x;
const container = document.querySelector(".container")

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    createDiv(input.value)
  }
})

function createDiv(inputValue) {
  let newDiv = document.createElement("div")
  newDiv.innerHTML += `<div class="added-div">
    <button><img src="./images/icon-check.svg" alt=""></button>
    <span class="main-span">${inputValue}</span>
    <svg class="x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
    </svg>
  </div>`
  container.appendChild(newDiv)

  x = newDiv.querySelector(".x")
  x.addEventListener("click", () => {
    input.value = ""
    container.removeChild(newDiv);
  })
  input.value = ""
}

  button.addEventListener("click", () => {
    span.classList.remove("main-span")
    span.classList.add("spanCrossed")
  })

