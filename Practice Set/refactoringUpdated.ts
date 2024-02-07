const fivePercentRaise = (salary) => {
    return salary * 0.5;
}

const tenPercentRaise = (salary) => {
    return salary * 1.1;
}

export const giveIncrement = (employee) => {
    if(!(employee.score < 5)){
        return tenPercentRaise(employee.salary) 
    }
    return fivePercentRaise(employee.salary)
}