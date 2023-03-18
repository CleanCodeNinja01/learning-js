// class keyword is syntactic sugar on function constructor which makes it easy to develop efficiently

// function Animals(name, age){
//     this.name = name;
//     this.age = age;
// }

// convert above function constructor into class

class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // no function keyword
  bark() {
    alert("hi");
  }
}

// now both above are equivalent

let animal1 = new Animals("bella", 24);
console.log({ animal1 });

Animals.prototype.bark(console.log("bye"));

// or try writing the function in Animals class

class Dog extends Animals {
  constructor(name, age, breed) {
    super(); /*name, age */
  }
}
