let counterValue = document.querySelector(".counter p")

let decBtn = document.querySelector(".dec")

let incBtn = document.querySelector(".inc")

let userInput = document.querySelector(".user-input")

let resetBtn = document.querySelector(".res")

decBtn.addEventListener('click',()=>{
 let currentValue = parseInt(counterValue.innerText)
 let userInputValue = parseInt(userInput.value)
 counterValue.innerText = parseInt(counterValue.innerText) - userInputValue
})

incBtn.addEventListener('click',()=>{
  let currentValue = parseInt(counterValue.innerText);
   let userInputValue = parseInt(userInput.value);
  counterValue.innerText = parseInt(counterValue.innerText) + userInputValue;
})

resetBtn.addEventListener('click',()=>{
  counterValue.innerText = '0'
  userInput.value = '0'
})
