const sumAll = function(numFrom, numTo) {
    let result = 0;
    let numStart = numFrom;
    let numEnd = numTo;
    if(typeof numFrom !== "number"){
        return "ERROR";
    }
    if(typeof numTo !== "number"){
        return "ERROR";
    }
    if(numStart<0 || numEnd<0){
        return "ERROR";
    }
    if(numFrom>numTo){
        numStart = numTo;
        numEnd = numFrom;
    }
    for(let i=numStart;i<=numEnd;i++){
        result=result+i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
