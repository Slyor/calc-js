// take two numbers and get the result of the addition

let result = 0

function toNum(...number){
  number = +number
}

function add(...numbers){
  result = arguments[0]+arguments[1]
  console.log(result)
}

add(1,2)

function subtract(...numbers){
  result = arguments[0]-arguments[1]
  console.log(result)
}

subtract(10,5)

function multiply(...numbers){
  result = arguments[0]*arguments[1];
  console.log(result)
}

multiply(3,3)

function divide(...numbers){
  result = arguments[0]/arguments[1];
  console.log(result)
}

divide(10,2)

