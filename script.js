// Decleration of initial values

let firstNum = 0
let operation = ""
let secondNum = 0
let result = 0
const clear = document.getElementById("clear")
const display = document.querySelector(".display")
const numberPad = document.querySelector(".numbers").childNodes
const operationPad = document.querySelector(".operations").childNodes
const equal = document.getElementById("equal")


// MATH

function toNum(...number){
  number = +number
}

// Takes 2 arguments from the user input and adds them
function add(...numbers){
  result = arguments[0] + arguments[1]
  return result
}

function subtract(...numbers){
  result = arguments[0] - arguments[1]
  return result
}

function multiply(...numbers){
  result = arguments[0] * arguments[1];
  return result
}

function divide(...numbers){
  result = arguments[0] / arguments[1];
  return result
}

function operate(firstNumber, secondNumber, operation){
  return operation(firstNumber, secondNumber)
}

function toZero(){
  firstNum = 0
  operation = ""
  secondNum = 0
  result = 0
}

// BUTTONS
document.addEventListener('keydown', keyDown);

function keyDown(e){
  switch(+e.keyCode){
    case 107:
      operation = "add"
      display.textContent = "+"          
      break;
    case 109:
      operation = "minus"
      display.textContent = "-"          
      break;
    // case 106:
    //   operation = "multiply"
    //   display.textContent = "multiply"
    case 96:
    case 97:
    case 98:
    case 99:    
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
      defineNumPressed(e)
      break;
  }
}

function defineNumPressed(e){
  if (operation == ""){
    firstNum += e.key
    firstNum = Number(firstNum)
    display.textContent = firstNum
  } else{
    secondNum += e.key
    secondNum = Number(secondNum)
    display.textContent = secondNum
  }
}

function defineOperationPressed(e){
  operation = e.key
  display.textContent = operation
}

// window.addEventListener("keydown", function (event) {
//   switch (event.key){
//     case "Numpad7":
//       display.textContent = "sieben"
//       break;
//     case "Numpad8":
//       display.textContent = "test"
//   }
// })

numberPad.forEach((number) => {
  number.addEventListener("click", () => {
    if (operation == ""){
      firstNum += number.textContent
      firstNum = Number(firstNum)
      display.textContent = firstNum
    } else{
      secondNum += number.textContent
      secondNum = Number(secondNum)
      display.textContent = secondNum
    }
  })
})

operationPad.forEach((button) => {
  button.addEventListener("click", () => {
    operation = button.id
    display.textContent = button.textContent
  })
})

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
    toZero()
  } else{
    display.textContent = Math.round(result * 10)/10
    firstNum = result
  }
})

clear.addEventListener("click", () => {
  toZero()
  display.textContent = firstNum
})


// numberPad.forEach((number) => {
//   number.addEventListener("keydown", (event) => {
//     switch(number.textContent){
//       case 7:
  
//     }
//   })
// })

/*
TODO:
- clean up the code. Add everything inside functions and make it look good.
- make a new github branch where i test some complex logic and features
- add backspace button
- add keyboard support
- modify the dom element .display so it shows the current number being pressed, the operator and the second number, then when the use clicks on the = button evaluate the expresion and show the result to the user.
- add exponentiation (stepenuvanje). Example: 3**2=9
*/


// <----------- PseudoCode! ----------->

// for each button check if the user has clicked it. If he has, check which button it is and change the value of the 
// for each number button check if the user has pressed it. If he has and hasnt pressed an assignment operator, assign it as a first number. If he presses an opeartion from the operations buttons, assign the value of operation to the one clicked. If a user clicks another number and at the same time he has an operator, assign it as a second value. When the user presses the = button, calculate the result of the operation and show the result on the screen.
// find a way to have  unlimited numbers paired with operations before the user clicks the = button. I.e. instead of having num1 and num2, have a num and operation and add them to a variable until the user presses the = button, where it is then evaluated.