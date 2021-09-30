const repeatString = function(stringInput,count) {
    let stringOutput="";
    for(let i=0;i<count;i++){
        stringOutput=stringOutput+stringInput;
    }
    if(count==1){
        stringOutput=stringInput;
    }else if(count<0){
        stringOutput="ERROR";
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
