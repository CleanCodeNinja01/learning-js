//remove duplicates
// [4,2,7,5,3,5,1,2] => [4,2,7,5,3,1]
// [4,2,7,5,3,1]

// .set in map ==> add key value pairs or can be used in updating the value of an existing key

const removeDuplicates = (array) => {
    let map = new Map();
    for(let i=0; i<array.length; i++) {
        if(!map.has(array[i])){
            map.set(array[i], 1)
        }
        else if(map.get(array[i])<=1){
            map.set(array[i], map.get(array[i])-1);
        }
    }
    // return Array.from(map.keys());
    return [...map.keys()];
}

let A = [4,2,7,2,3,4,5,2]
// console.log("removeDuplicates",removeDuplicates(A))

const unique = A.filter((element, index, array) =>{
    // the below array is formed when condition of element that is not existing before (i.e no duplicate) is true
    return array.indexOf(element) === index;
})
console.log(unique)

const findDuplicates = (array) => {
    let map = new Map();
    for (let i=0; i<array.length; i++) {
        if(!map.has(array[i])){
            map.set(array[i],1)
        }
        else if(map.get(array[i])<=1){
            map.set(array[i], map.get(array[i])-1);
        }
    }
    let duplicates = new Map();
    for (let i=0; i<array.length; i++){
        if(map.get(array[i])<=0){
            duplicates.set(array[i], map.get(array[i]))
        }
    }
    return [...duplicates.keys()];
}

console.log("findDuplicates",findDuplicates(A))
