const getTheTitles = function(objBookList) {
    let titles=[];
    objBookList.forEach(element => {
        titles.push(element.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
