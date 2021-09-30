const removeFromArray = function() {
    let arrayInput = arguments[0];
    let stringToRemove = "";
    let arrayOut = arrayInput;
    let rmListLength = arguments.length-1;
    if(rmListLength===1){
        stringToRemove = arguments[1];
        return removeItem(arrayOut, stringToRemove);
        /*rmListLength=arrayRemoveList.length; */
    } else if(rmListLength===0){
            return arrayInput;
    }
    for(let i=1 ; i <= rmListLength ; i++){
        stringToRemove = arguments[i];
        arrayOut = removeItem(arrayOut,stringToRemove);
    }
    return arrayOut;
}

function removeItem(arrayInput,stringToRemove){
    let arrayLength=arrayInput.length;
    let arrayOut=[];
    for(let i = 0 ; i < arrayLength ; i++){
        if(arrayInput[i] !== stringToRemove){
            arrayOut.push(arrayInput[i]);
        }
    }
    return arrayOut;
}
// Do not edit below this line
module.exports = removeFromArray;
