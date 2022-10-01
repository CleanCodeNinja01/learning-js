//Object => non primitive data type
let myObj = new Object({name: 'Saleha', rollNum: 'cs-117'});

// ~~~~~~~~~~~ Declaration ~~~~~~~~~~~~~

//1. Through Object literal (Curly braces)
let myObj1 = {}
myObj1.name = 'Saleha';
myObj1.rollNum = 'cs-117'

//2. Through constructor
let myObj2 = new object()

//3. Through object.create
function students() {
    this.name = 'Saleha'
    this.rollNum = 'cs-117'
}

function developer() {
    students.call(this);
}

student.prototype = Object.create(students.prototype);
const dev = new developer();
console.log(dev.name);
console.log(dev.rollNum);

//Map
let myMap = new Map();
myMap.set(dev, 'Saleha');
myMap.set(rollNum, 'cs-117');

// ~~~~~~~~~~~ Accessing Element ~~~~~~~~~~~~~
//Object

myObj1.dev;
myObj1[rollNum];

//Map

myMap.get(dev);
myMap.get('rollNum');


// ~~~~~~~~~~~ Check if a key already exists ~~~~~~~~~~~~~
//Object

let doExist = myObj.name === 'Shujaat'
console.log(doExist) //==> will return boolean value

//Map

myMap.has(dev)


// ~~~~~~~~~~~ Adding a new element ~~~~~~~~~~~~~
//Object

myObj[hobby] = "bowling"

//Map

myMap.set('hobby', 'bowling')

