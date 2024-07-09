// take two numbers and get the result of the addition

let firstNum = 0
let operation = ""
let secondNum = 0
let result = 0

function toNum(...number){
  number = +number
}

function add(...numbers){
  result = arguments[0] + arguments[1]
  return result
}

// add(1,2)

function subtract(...numbers){
  result = arguments[0] - arguments[1]
  return result
}
// console.log(operate(1,2,subtract))
// subtract(10,5)

function multiply(...numbers){
  result = arguments[0]*arguments[1];
  return result
}

// multiply(3,3)

function divide(...numbers){
  result = arguments[0]/arguments[1];
  return result
}

// divide(10,2)

function operate(firstNumber, secondNumber, operation){
  return operation(firstNumber, secondNumber)
}



// modify the dom element .display so it shows the current number being pressed, the operator and the second number, then when the use clicks on the = button evaluate the expresion and show the result to the user.

const display = document.querySelector(".display")
const numberPad = document.querySelector(".numbers").childNodes
// const numbers = numberPad.childNodes
// const allButtons = document.querySelectorAll("button")

numberPad.forEach((number) => {
  number.addEventListener("click", () => {
    // alert(button.textContent)
    if (operation == ""){
      firstNum = +number.id
    } else{
      secondNum = +number.id
    }
    display.textContent = number.id
  })
})

const operationPad = document.querySelector(".operations").childNodes

operationPad.forEach((button) => {
  button.addEventListener("click", () => {
    operation = button.id
    display.textContent = button.textContent
  })
})

const equal = document.getElementById("equal")
equal.addEventListener("click", () => {
  switch(operation){
    case "add":
      result = operate(firstNum, secondNum, add);
      break;
    case "minus":
      result = operate(firstNum, secondNum, subtract);
      break;

    case "multiply":
      result = operate(firstNum, secondNum, multiply);
      break;
    case "divide":
      result = operate(firstNum, secondNum, divide);
      break;
    }
  if (isNaN(result)){
    display.textContent = "Who invited this kid?"
    firstNum = 0
    operation = ""
    secondNum = 0
    result = 0  
  } else{
    display.textContent = Math.round(result * 10)/10
    firstNum = result
  }
})

let clear = document.getElementById("clear")
clear.addEventListener("click", () => {
  firstNum = 0
  operation = ""
  secondNum = 0
  result = 0
  display.textContent = firstNum
})

// for (i=0, len = allButtons.length; i<len; i++){
//   allButtons[i].addEventListener("click", () => {
//     display.textContent = 
//   })
// }

// .addEventListener("click", () => {
//   display.textContent = "1"
// })



// for each button check if the user has clicked it. If he has, check which button it is and change the value of the 
// for each number button check if the user has pressed it. If he has and hasnt pressed an assignment operator, assign it as a first number. If he presses an opeartion from the operations buttons, assign the value of operation to the one clicked. If a user clicks another number and at the same time he has an operator, assign it as a second value. When the user presses the = button, calculate the result of the operation and show the result on the screen.
// find a way to have  unlimited numbers paired with operations before the user clicks the = button. I.e. instead of having num1 and num2, have a num and operation and add them to a variable until the user presses the = button, where it is then evaluated.