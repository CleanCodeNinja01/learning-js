// [object Object]

// easily ajax request using axios library
// async await keyword use krk parrallel request bhejskte hain
//

// const axios = require('axios');
import axios from "axios";

// console.log({axios})

// using async tells us that we will be using await inside the function
// await keyword is used where we know a promise will be resolved
async function getPostData() {
  /*PROMISE VS ASYNC/AWAIT */

  // Promise way
  /*axios
    .get("https://jsonplaceholder.typicode.com/posts")
    // returns promise with then callback
    .then((data) => {
      console.log({ data });
    })
    //in case of error
    .catch((err) => {
      console.log({err});
    });*/

  // below requests goes sequentially not parallel

  try {
    // Async/await way
    const postsPromise = axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const usersPromise = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //   console.log({ postsPromise });
    //   console.log({ usersPromise });

    const posts = await postsPromise;
    const users = await usersPromise;
  } catch (err) {
    console.log({ err });
  }
}

getPostData();
