// map is used to create a new array from existing by applying a function to elements 
// callback ==> element
// let new_array = arr.map(function callback(element, index, array){})

let array = [1,2,3,4]
const double = array.map(element => element*2)
// console.log(double)

// filter method takes each element in an array and applies a condition against it, if this condition is true element gets pushed in the output array. 
// syntax is similar to map except the callback should true to keep the element, false otherwise

const filterOddOut = array.filter(element => element % 2 === 0)
// console.log(filterOddOut)

const students = [
    { 
        name: 'Saleha',
        GPA: 3.5
    },
    { 
        name: 'Fatima',
        GPA: 3.8
    },
    { 
        name: 'Ayesha',
        GPA: 3.6
    }
]

const highGPA = (students) => {
    const names = []
    students.filter(object=>{
        if(object.GPA>=3.6){
            names.push(object.name);
        }
    })
    return names;
}

// console.log(highGPA(students))

// reduce method reduces array value to just 1 value
// to get the output value it returns the reducer function on each element of the array
// passes the result of this callback from one array element to other 

const sum = array.reduce((result, item) => result+item);
// console.log('sum', sum)

const data = 
	 {'products':
		[{
			"productId": "product-1",
			"title": "Cupcake Product 1",
			"image": "image-1",
			"subCategoryId": "subCategoryId-1"
		},
		{
			"productId": "product-2",
			"title": "Jelly",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		},
		{
			"productId": "product-3",
			"title": "Custard Product 3",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		},
		{
			"productId": "product-4",
			"title": "Bubble Product 4",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		},
		{
			"productId": "product-5",
			"title": "Chips Product 5",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		},
		{
			"productId": "product-2",
			"title": "Jelly",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		},
		{
			"productId": "product-2",
			"title": "Jelly",
			"image": "image-2",
			"subCategoryId": "subCategoryId-2"
		}
	]}


const searchKey = 'Jelly';
const y = data.products.filter((product) => {
    console.log('inside filter product', product);
    console.log('product.title',product.title)
    console.log('searchKey',searchKey)
    return product.title == searchKey;
});
console.log('y', y);
// return setTimeout(() => {
//     res.send(y);
// }, 1000);
