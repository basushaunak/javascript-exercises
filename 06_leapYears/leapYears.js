const leapYears = function(yearToCheck) {
    if(typeof yearToCheck !== "number"){
        return "ERROR";
    }
    if(yearToCheck%400 === 0){
        return true;
    }else if(yearToCheck%4===0 && yearToCheck%100 !== 0){
        /* Number divided by 4 but not divided by 100 
           Number divided by 100 must be divided by 400 to be a leap year */
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
