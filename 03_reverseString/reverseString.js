const reverseString = function(inputString) {
    let outStr = "";
    let strLen=inputString.length;
    for( let i=strLen-1;i>=0;i--){
        outStr = outStr+inputString[i];
    }
    return outStr;
};

// Do not edit below this line
module.exports = reverseString;
