const add = function(num1, num2) {
  let totalValue = 0;
  total = +(num1 + num2);
  return total;
};

const subtract = function(num1, num2) {
  let result = 0;
  if(num1 > num2){
    result = +(num1 - num2);
  }	else {
    result = +(num2 - num1);
  }
  return result;
};

const sum = function(arrayInput) {
  let result = 0;
  let arrayLen = arrayInput.length;
  if (arrayLen === 0){
    return 0;
  }else if(arrayLen === 1){
    return +(arrayInput[0]);
  }
  for(i = 0; i < arrayLen; i++){
    result = result + arrayInput[i];
  }
  return +result;
};

const multiply = function(inputArray) {
  let result = 1;
  let arrayLen=inputArray.length;
  if(arrayLen <= 1){
    return NaN;
  }
  for(let i = 0; i < arrayLen; i++){
    result = result * inputArray[i];
  }
  return +result;
};

const power = function(num,power) {
	if(num == 0){
    return 0;
  }
  if(power == 0){
    return 1;
  }
  let result = 1;
  for(let i = 0; i < power; i++){
    result = result * num;
  }
  return +result;
};

const factorial = function(num) {
  if(num == 0 || num == 1){
    return 1;
  }
  if(num < 0){
    return NaN;
  }
  let result = 1;
  for(i = num; i > 0; i--){
    result = result * i;
  }
  return +result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
