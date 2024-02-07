const fivePercentRaise = (salary) => {
    const updatedSalary = salary * 0.5;
    return updatedSalary;
}

const tenPercentRaise = (salary) => {
    const updatedSalary = salary * 1.1;
    return updatedSalary;
}

export const giveIncrement = (employee) => {
    if(employee.score < 5){
        return fivePercentRaise(employee.salary)
    } else {
        return tenPercentRaise(employee.salary)
    }
}