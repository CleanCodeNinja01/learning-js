// Map is a DS, like array or object
// retrieve, size, loop over ==> easy

let person = new Map();
person.set("name", "Saleha");
person.set("age", 25);

// console.log(person.get("name"));
// console.log(person.size);

person.forEach((val, key, map) => {
    // console.log({ val });
});

// console.log(person.keys());
// console.log(person.values());

// for in is used to return object

// console.log({ person });

// used for iterating over whole object
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    // console.log({ element });
  }
}

// for of ==> used for iterating on object with keys or values or entries (meaning keys + values)

for(let per of person.entries()) {
    // console.log({per})
}

for(let [key,value] of person.entries()) {
    console.log({key})
    console.log({value})
}
