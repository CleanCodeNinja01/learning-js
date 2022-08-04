// built in ways to manipulate arrays & objects in JS

//we are going to cover
//for
//for..of
//for..in
//find
//findIndex
//map
//reduce
//filter
//every
//some
//entries
//includes
//splice - specify length
//slice - select
//concat

const users = [
    { name: "Saleha", age: "25"},
    { name: "Shujaat", age: "17"},
    { name: "John", age: "8"},
    { name: "Bob", age: "19"},
    { name: "Tom", age: "30"},
    { name: "Jane", age: "20"}
  ]
  
  console.log("users", users)
  
  //Array => ['a','b','c'] => 0,1,2
  //Object => [{'name':'saleha'},{'name':'shujaat'}] => [0: object, 1:object]
  
  //of is used for objects
  for (let user of users){
    console.log("user for..of", user);
  }
  
  //in is used for keys of objects 
  for (let userProps in users){
    console.log("userProps", userProps);
  }
  
  //in is used for keys of objects => trying for first object here
  let user = users[0];
  for (let userProps in user){
    console.log("userProps", user[userProps]);
  }
  
  //find => filters out array based on the logic and returns the first 
  //in find we passes a callback which is an entity / element / object in array and matches the logic defined 
  const foundUser = users.find((user)=>{return user.age > 25});
  console.log("foundUser", foundUser)
  
  //findIndex => filters out array based on logic and returns the first index falling on that logic
  const foundUserIndex = users.findIndex((index) => {return index.age > 25})
  console.log("foundUserIndex", foundUserIndex);
  
  //map => takes items of arays passes them thru transformation and give new array
  const mappedUser = users.map((user)=>{return user.name;})
  console.log("mappedUser", mappedUser)
  
  //map => takes items of arays passes them thru transformation and give new array
  //adding desc field in a new array named descUser
  const descUser = users.map((user)=>{
    return {
      ...user,
      description: `${user.name} is ${user.age} years old`
    }
  })
  console.log("descUser", descUser);
  console.log("users", users);
  
  //reduce => allows u to pass items in array thru several iterations and helps u prepare new item in end (like array, item, number)
  //reduce callback has 2 params => acc () & element of array 
  const reduced = users.reduce((acc, user) =>{
    if (user.age < 10){
      return acc;
    }
    acc[user.name] = user
    return acc;
  }, {})
  console.log("reduced",reduced) 
  
  //filter => filters out on array based on logic applied
  const filterUser = users.filter((user) => {return user.age <20})
  console.log("filterUser", filterUser);
  
  //every / and => runs the given check on all the items of the array and returns true if logic is true for all items in the array
  const areAllKids = users.every((user)=>{return user.age < 20})
  console.log("areAllKids",areAllKids)
  
  //some / or => returns true if any of the items are falling into logic
  const someKids = users.some((user) => {return user.age <20})
  console.log("someKids", someKids)
  
  //entries => mainly for objects, used when you are doing some transformation and u have some complex data that you are preparing object from
  const entries = Object.entries(user);
  console.log("entries",entries)
  console.log("fromentries", Object.fromEntries(entries))
  
  //includes => checks the given element exist in array
  const colors = ['red', 'purple', 'pink']
  console.log(colors.includes('brown'))
  
  //splice => helps us removing items from array (FOR REMOVING)
  //first => index , second => elements count
  const newColors = colors.splice(1);
  console.log("newColors",newColors)
  
  //slice => helps us in selecting elements from array (FOR SELECTING)
  //first => starting index
  //second (optional) => n+1
  
  //concat => merge

  //try output => alpha gama beta
  function fun(){
    console.log("alpha");
    setTimeout(() => console.log("beta"), 5000);
    console.log('gama');
  }
  
  const res1 = fun();

  //try output => alpha beta gama
  function fun(){
    console.log("alpha");
    setTimeout(() => console.log("beta"), 5000);
    console.log('gama');
  }
  
  const res2 = fun();

  //Using Reduce
  //To find the frequency of elements in an array
  let arr = ['hello', 'JS', 'world', 'hello'];
  
  const countWord = (array) => {
    return array.reduce((acc, curr) => {
      if(acc[curr]){
        acc[curr]+=1;
      }
      else{
        acc[curr]=1;
      }
      return acc;
    },{})
  }

  console.log(countWord(arr));

  //To find the frequency of elements using object 
  countWordThruObj = (array) => {
    const count={};
    array.forEach((element) => {
      if(count[element]){
        count[element]+=1;
      }
      else{
        count[element]=1;
      }
      return count;
    })
  }

  console.log(countWordThruObj(arr))