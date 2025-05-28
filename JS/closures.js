function createCounter() {
    let count = 0;
  
    return function () {
      count++;
      return count;
    };
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();

  console.log(counter1()); // 1
  console.log(counter2()); // 1
  console.log(counter1()); // 2
  