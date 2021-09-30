const ftoc = function(tempF) {
  /* C = (F-32)*5/9 */
  let tempC = 0;
  if(typeof tempF !== "number"){
    return "Error";
  }
  tempC = ((tempF-32)*5)/9 ;
  if(tempC !== parseInt(tempC)){
    tempC = +tempC.toFixed(1);
  }
  return tempC;
};

const ctof = function(tempC) {
  /* F = (C * 9/5) + 32 */
  let tempF = 0;
  if(typeof tempC !== "number"){
    return "ERROR";
  }
  tempF = (tempC*9/5)+32;
  if(tempF !== parseInt(tempF)){
    tempF = +tempF.toFixed(1);
  }
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
