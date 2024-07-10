// const fetch = require('node-fetch')

// const asyncFuntionCreationPopulate = async() => {
//     const requestUrl =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//     // const request = new Request(requestUrl)

//     const response = await fetch(requestUrl)
//     const superHeros = await response.json() // returns a promise, so you need to await it
//     return superHeros
// }

// asyncFunctionCreationPopulate().then(superHeros => {
//     console.log({superHeros})   
// })

// console.log('print: ')
// console.log(asyncFuntionCreationPopulate())

// const asyncFunctionCreationPopulate = async () => {
//     const requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

//     const response = await fetch(requestUrl);
//     const superHeros = await response.json();
//     return superHeros;
// };

// const printSuperHeros = () => {
//     try {
//         const superheroes = await asyncFunctionCreationPopulate()
//         console.log({superheroes})
//     } catch(error){
//         console.log({error})
//     }
// }

// console.log({printSuperHeros})

// Call the async function and handle the returned promise
// asyncFunctionCreationPopulate().then(superHeros => {
//     console.log('print: ');
//     console.log(superHeros);
// }).catch(error => {
//     console.error('Error:', error);
// });


/////

const fetch = require('node-fetch');

const asyncFunctionCreationPopulate = async () => {
    const requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const response = await fetch(requestUrl);
    const superHeros = await response.json();
    return superHeros;
};

const printSuperheroes = async () => {
    try {
        const superHeros = await asyncFunctionCreationPopulate();
        console.log('print: ');
        console.log(superHeros);
    } catch (error) {
        console.error('Error:', error);
    }
};

printSuperheroes();
