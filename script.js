let firstNum = 0
let operation = ""
let secondNum = 0
let result = 0
const clear = document.getElementById("clear")
const display = document.querySelector(".display")
const numberPad = document.querySelector(".numbers").childNodes
const operationPad = document.querySelector(".operations").childNodes
const equal = document.getElementById("equal")


function toNum(number){
  return number = + number
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

numberPad.forEach((number) => {
  number.addEventListener("click", () => {
    if (operation == ""){
      firstNum += number.textContent
      firstNum = toNum(firstNum)
      display.textContent = firstNum
    } else{
      secondNum += number.textContent
      secondNum = toNum(secondNum)
      display.textContent = secondNum
    }
  })
})

// Do the operation that is on the button, making the operation the same value as the button id
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