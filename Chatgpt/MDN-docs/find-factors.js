// input 8
// output = [1,2,4,8]

const findFactors = (number) => {
    const factor = []
    for (let i=1; i<=number; i++){
        if (number%i==0){
            factor.push(i)
        }
    }
    return factor
}

const result = findFactors(8)

console.log({result})

// example of changing color of a button by click

const btn = document.querySelector("button")

function randomGenerateFunc(number){
    return (Math.float(Math.random*(number+1)))
}

function changeBgColor(e){
    const randCol = `rgb(${randomGenerateFunc(255)} ${randomGenerateFunc(255)} ${randomGenerateFunc(255)}})`

    e.target.style.backgroundColor = randCol
}

btn.addEventListener("click", changeBgColor)

// -------