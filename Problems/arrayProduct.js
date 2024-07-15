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
    return result;
}

let array = [1,2,3,4,5];
// console.log(productOfArrayExceptSelf(array));

// TODO: Optimized self product array

function optimized(array){
   const lengthOfArray = array.length
   let result = new Array(lengthOfArray).fill(1);
   let leftProduct = new Array(lengthOfArray).fill(1);
   let rightProduct = new Array(lengthOfArray).fill(1);

   for (let index = 1; index < array.length; index++) {
      leftProduct[index] = array[index-1]*leftProduct[index-1]
      // console.log(leftProduct[index])
   }

   for (let index = 1; index < array.length; index++) {
      rightProduct[index] = array[index-1]*rightProduct[index-1]
   }

   for (let i = 1; i < array.length; i++) {
      result[i] = leftProduct[i]*rightProduct[i]
   }

   return result
}


const productOfArrayExceptSel2 = (array) => {
   const length = array.length;
   const result = new Array(length).fill(1);
   const leftProducts = new Array(length).fill(1);
   const rightProducts = new Array(length).fill(1);

   // Fill leftProducts
   for (let i = 1; i < length; i++) {
       leftProducts[i] = leftProducts[i - 1] * array[i - 1];
   }

   // Fill rightProducts
   for (let i = length - 2; i >= 0; i--) {
       rightProducts[i] = rightProducts[i + 1] * array[i + 1];
   }

   // Fill result with the product of left and right products
   for (let i = 0; i < length; i++) {
       result[i] = leftProducts[i] * rightProducts[i];
   }

   return result;
}

// let array = [5, 2, 3, 4];
console.log(productOfArrayExceptSel2(array)); // Output: [24, 60, 40, 30]


// console.log(optimized(array));

