let maxNumber = (array) => {
    return Math.max(...array)
}

let maxNumberLoop = (array) => {
    let i = array.length;
    //time complexity of sort ==> ?
    //storing into a new array since .sort changes original array
    let newArray = [...array];
    let sortedArray = newArray.sort();
    let max = sortedArray[array.length-1];
    while (i--){    
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

let minNumber = (array) => {
    return Math.min(...array)
}

let minNumberLoop = (array) => {
    let i = array.length;
    let newArray = [...array];
    let sortedArray = newArray.sort();
    //randoming select first value
    let min = sortedArray[0];
    while(i--){
        if(array[i]<min){
            min=array[i];
        }
    }
    return min;
}

let secondMaxNumber = (array) => {
    let secondMax = 0;
    let firstMax = maxNumber(array)
    for(let i=0; i<array.length; i++){
        if (array[i]>secondMax&&array[i]<firstMax){
            secondMax = array[i];
        } 
    }
    return secondMax;
}

let secondMinNumber = (array) => {
    let secondMin = 0;
    let firstMin = array[0];
    for (let i=0; i<array.length; i++){
        if(array[i]<firstMin){
            secondMin=firstMin;
            firstMin=array[i];
        } else if(array[i]<secondMin&&array[i]!=secondMin){
            secondMin=array[i];
        }
    }
    return secondMin;
}

let maxProductOptimized = (array) => {
    let first = maxNumber(array);
    let second = secondMaxNumber(array);
    return first*second;
}

let minProductOptimized = (array) => {
    let first = minNumber(array);
    let second = secondMinNumber(array);
    return first*second;
}

let maxSumOptimized = (array) => {
    let first = maxNumber(array);
    let second = secondMaxNumber(array);
    return first+second;
}

let minSumOptimized = (array) => {
    let first = minNumber(array);
    let second = secondMinNumber(array);
    return first+second;
}

let negativeProduct = (max, min, isNegative) => {
    if(isNegative) {
        return Math.max(max,min)
    }else{
        return max;
    }
}

let inputArray1 = [4,8,2,-9,10,3];
let inputArray2 = [4,8,2,9,1,3];
console.log("maxNumber", maxNumber(inputArray1));
console.log("minNumber", minNumber(inputArray1));
console.log("minNumberLoop", minNumberLoop(inputArray1))
console.log('maxNumberLoop',maxNumberLoop(inputArray1));
console.log("secondMaxNumber",secondMaxNumber(inputArray1))
console.log("secondMinNumber",secondMinNumber(inputArray1))

//maxProductOptimized, minProductOptimized, minSumOptimized, maxSumOptimized
console.log("maxProductOptimized",maxProductOptimized(inputArray1))//80
console.log("minProductOptimized",minProductOptimized(inputArray1))//-90
console.log("maxSumOptimized",maxSumOptimized(inputArray1))//18
console.log("minSumOptimized",minSumOptimized(inputArray1))//-7
console.log("negativeProduct",negativeProduct(maxProductOptimized(inputArray1),minProductOptimized(inputArray1),isNegative=true))//80