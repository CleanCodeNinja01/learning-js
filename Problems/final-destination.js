
/*
    You want to spend your next vacation in a foreign country. In the summer you are free for N consecutive days. You have consulted Travel Agency and learned that they are offering a trip to some interesting location in the country every day. For simplicity, each location is identified by a number from 0 to N- 1. Trips are described in a non-empty arrayA: for each K(0≤K<N),A[K] is the identifier of a location which is the destination of a trip offered on day K. Travel Agency does not have to offer trips to all locations, and can offer more than one trip to some locations. You want to go on a trip every day during your vacation. Moreover, you want to visit all locations offered by Travel Agency. You may visit the same location more than once, but you want to minimize duplicate visits. The goal is to find the shortest vacation (a range of consecutive days) that will allow you to visit all the locations offered by Travel Agency. For example, consider array A such that:
        A[0]=7
        A[1]=3
        A[2]=7
        A[3]=3
        A[4]=1
        A[5]=3
        A[6]=4
        A[7]=1
    Travel Agency offers trips to four different locations (identified by numbers 1, 3, 4 and 7 ). The shortest vacation starting on day 0 that allows you to visit all these locations ends on day 6 (thus is seven days long). However, a shorter vacation of five days (starting on day 2 and ending on day 6) also permits you to visit all locations. On every vacation shorter than five days, you will have to miss at least one location. Write a function: Write a function: class Solution \{ public int solution(int [ ] A); \} that, given a non-empty array A consisting of N integers, returns the length of the shortest vacation that allows you to visit all the offered locations. For example, given array A shown above, the function should return 5 , as explained above. Given A=[2,1,1,3,2,1,1,3], the function should return 3 . One of the shortest vacations that visits all the places starts on day 3 (counting from 0 ) and lasts for 3 days. Given
    A=[7,5,2,7,2,7,4,7], the function should return 6. The shortest vacation that visits all the places starts on day 1 (counting from 0 ) and lasts for 6 days.
 */

const findDestinations = (A) => {
    const uniqueDestinations = new Set(A);
    const traceLocation = new Map()

    //make map (traceLocation) of unique values 
    for (value of uniqueDestinations){
        traceLocation.set(value, 1)
    }

    let visit = traceLocation.size;
    let leftIndex = tempLeftIndex = tempRightIndex = 0;
    let key;

    for(let rightIndex=1; rightIndex<=A.length; rightIndex++){
        key = A[rightIndex-1];
        //--goes inside this check when traversing array it gets distinct elements
        if(traceLocation.get(key) > 0){
            //--visit is decremented everytime a unique location is traversed
            visit-= 1;
        }
        //--value is decremented each time the location is traversed
        traceLocation.set(key, traceLocation.get(key)-1);
        //--goes inside this check when the distinct locations (elements) are traversed but still elements are yet to be visited
        if(visit==0){
            //--goes inside this while loop when first element is repeating and loops over it till it reaches last element => it is made to traverse whole array with duplicate numbers
            while(traceLocation.get(A[leftIndex])<0){
                traceLocation.set(A[leftIndex], traceLocation.get(A[leftIndex])+1);
                //increment loop variable inside this while loop
                leftIndex+=1;
            }
            //--will mandatory run first time after while loop (may execute or not)
            //--OR will goes inside the if check each time rightIndex is greater than leftIndex 
            if((tempRightIndex<=0) || (rightIndex - leftIndex <= tempRightIndex - tempLeftIndex)){
                //--rightIndex to be stored in tempRightIndex since rightIndex is a loop counter variable
                tempRightIndex = rightIndex;
            }
        }
    }
    return tempRightIndex-leftIndex;
}

const B = [2, 1, 1, 3, 1, 1, 4]; //7
const A = [2, 1, 1, 3, 1, 1, 4, 3]; //7
const C = [2, 1, 1, 3, 3, 4]; //4
const D = [7,5,2,7,2,7,4,7]; //6
const E = [2,1,5];//3
const F = [2,1,3,1,4,3,2];//4
const G = [7,8,6,3,4,8,6,6,1];//9
console.log("findDestinations", findDestinations(E))
