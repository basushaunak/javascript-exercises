const palindromes = function (strInput) {
    let revWord = [];
    let word = [];
    let char = "";
    let asciiCode=0;
    strInput = strInput.toLowerCase();
    let lengthOfString = strInput.length;
    if(lengthOfString==1){
        return true;
    }
    if(lengthOfString==0){
        return "ERROR";
    }
    for(let i = 0; i < lengthOfString; i++){
        char = strInput[i];
        asciiCode = char.charCodeAt();
        if(asciiCode >= 48 && asciiCode <= 57){
            word.push(char);
            revWord.unshift(char);
        } else if(asciiCode >= 97 && asciiCode <= 122){
            word.push(char);
            revWord.unshift(char);
        }
    }
    lengthOfString = word.length;
    let isPalindrome = true;
    for(let i = 0; i < lengthOfString; i++){
        if(word[i] !== revWord[i]){
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
