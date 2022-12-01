//function will take in a js date object and return the number of days till the next christmas. If past this years christmas it will return the days till next christmas
// eg if on 26/12/2022 if will return days till 25/12/2023

// run by changing intot eh directory and running node dayOne.js in the command line
function daysTillChristmas(date){
    let christmas = new Date();
    christmas.setDate(25);
    christmas.setMonth(11);
    while(date > christmas){
        christmas.setFullYear(christmas.getFullYear() + 1)
    }

    const timeDifference = christmas - date;
    //86400000 is number of millisecnods in a day
    const days = Math.floor(timeDifference / 86400000)
    return days
}

console.log(daysTillChristmas(new Date()))