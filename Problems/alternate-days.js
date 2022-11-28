// 1. calculate alternate days 

// 1 yr 365 days ==> 

const leapYear = (year) => {
    if (year %4 == 0){
        return true
    } else {
        return false
    }
}

console.log('leapYear: ', leapYear(2024))

// 30 - 28 - 31 - 30 - 31 - 30 - 31 (july) - 31 - 30 -31 -30 - 31

// Problem: to check alternate days in the month of november

const alternateDaysByMonth = new Map();
// key: month , value: days
alternateDaysByMonth.set('January', 30).set('February', 28).set('March', 31).set('April', 30).set('May', 31).set('June', 30).set('July', 31).set('August', 31).set('September', 30).set('October', 31).set('November', 30).set('December', 31)

// 30 ==> 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29

const calculateAlternateDaysByMonth = (month) => {
    console.log('month: ', month);
    alternateDaysByMonth.get(month);
}

console.log('calculateAlternateDaysByMonth: ', calculateAlternateDaysByMonth('November'))