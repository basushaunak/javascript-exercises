const findTheOldest = function(objPeople) {
    let currDate = new Date;
    let currYear = currDate.getFullYear();
    let oldest = -Infinity;
    let oldestIndex = -1;
    let age = -1;
    let arrayLen = objPeople.length;
    for(let i = 0; i < arrayLen ; i++){
        if (typeof objPeople[i].yearOfDeath == "undefined" || objPeople[i].yearOfDeath == 0){
            age = currYear - objPeople[i].yearOfBirth;
        } else {
            age = objPeople[i].yearOfDeath - objPeople[i].yearOfBirth;
        }
        if(age > oldest){
            oldest = age;
            oldestIndex = i;
        }
    }
    return objPeople[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
