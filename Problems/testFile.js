var array=[1,2,3,4,5];
// console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
 
// console.log(array);
// shows [1, 2], original array altered.
 
var array2=[0,1,2,3,4,5,6,7,8,9,10,11];
// array2.splice(5,5);
console.log(array2.splice(1*10,10)) // (index, no. of elements)
console.log(array2); // reduced array

// shows [8]
 
// console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.
 
// console.log(array2);