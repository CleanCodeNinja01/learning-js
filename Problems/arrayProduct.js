const productOfArrayExceptSelf = (array) => {
    let result = [], product;
    for(let i = 0; i < array.length; i++){
      product = 1;
      for(let j = 0; j < array.length; j++){
         if(i !== j) {
            product *= array[j];
         }
      }
      result.push(product);
    }
    return resultArray;
}

let array = [1,2,3,4];
console.log(productOfArrayExceptSelf(array));

// TODO: Optimized self product array