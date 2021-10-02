const caesar = function(strInput, shiftValue) {
    let strLength = strInput.length;
    let strOut = "";
    let asciiValue = 0;
/*  let char_a = 97;
    let char_z = 122;
    let char_A = 65;
    let char_Z = 90;
    let char_0 = 48;
    let char_9 = 57; */
    if(shiftValue == 0){
        return strInput;
    }
    if(shiftValue > 0){
        for(let i = 0; i < strLength; i++ ){
            asciiValue = positiveShift(strInput[i].charCodeAt(), shiftValue);
            strOut = strOut + String.fromCharCode(asciiValue);
        }
        return strOut ;
    }
    if (shiftValue < 0){
        for(let i = 0; i < strLength; i++){
            asciiValue = positiveShift(strInput[i].charCodeAt(), shiftValue);
            strOut = strOut + String.fromCharCode(asciiValue);
        }
        return strOut ;
    }
    return "ERROR";
};
function positiveShift(char,shift){
    let tmpChar = 0;
    let charOut = 0;
    if(char >= 48 && char <= 57){
        tmpChar = char + shift ;
        while(tmpChar >57){
            tmpChar = 48 + (tmpChar - 57) - 1 ;
        }
            charOut = tmpChar;
    } else if(char >= 65 && char <= 90){
        tmpChar = char + shift ;
        while(tmpChar > 90){
            tmpChar = 65 + (tmpChar - 90) - 1;
        }
        charOut = tmpChar;
    } else if(char >= 97 && char <= 122){
        tmpChar = char + shift ;
        while(tmpChar > 122){
            tmpChar = 97 + (tmpChar - 122) -1;
        }
        charOut = tmpChar;
    } else {
        charOut = char;
    }
    return charOut ;
 }
function negativeShift(char,shift){    
    let tmpChar = 0;
    let charOut = "";
    if(char >= 48 && char <= 57){
        let tmpChar = char+shift ;
        while(tmpChar < 48){
            tmpChar = 57 - (48-tmpChar) +1;
        }
        charOut = tmpChar;
    } else if(char >= 65 && char <= 90){
        let tmpChar = char+shift ;
        while(tmpChar<65){
            tmpChar = 90 - (65 - tmpChar) + 1;
        }
        charOut = tmpChar;
    }else if(char >= 97 && char <= 122){
        let tmpChar = char+shift ;
        while(tmpChar < 97){
            tmpChar = 122 - (97 - tmpChar) + 1;
        }
        charOut = tmpChar;
    } else{
        charOut = char;
    }
    return charOut;
}

// Do not edit below this line
module.exports = caesar;
