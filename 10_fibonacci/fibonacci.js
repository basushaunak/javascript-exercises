const fibonacci = function(position) {
    let rtnValue = 0;
    let fiboArray = [];
    position = parseInt(position);
    if(position == 1 || position == 2){
        return 1;
    }
    if(position < 0){
        return "OOPS";
    }
    for (let i = 0; i < position; i++){
        if(i == 0 || i == 1){
            fiboArray.push(1);
            continue;
        }
        rtnValue = fiboArray[i-1] + fiboArray[i-2];
        fiboArray.push(rtnValue);
    }
    return rtnValue;
};

// Do not edit below this line
module.exports = fibonacci;
