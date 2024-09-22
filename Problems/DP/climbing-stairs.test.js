const { climbingStairs, climbingStairsRecursive } = require('./climbing-stairs');

const testCases = [
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 3 },
    { n: 4, expected: 5 },
    { n: 5, expected: 8 },
    { n: 6, expected: 13 },
    { n: 7, expected: 21 },
    { n: 8, expected: 34 },
    { n: 10, expected: 89 },
    { n: 20, expected: 10946 },
    { n: 30, expected: 1346269 }
];

describe('Climbing Stairs Functionality', () => {

    describe('Climbing stairs Iterative approach',()=>{
        test('test cases for n=${n} should response with expected=${expected}',()=>{
            const n = 3
            expect(climbingStairs(n)).toBe(testCases[n-1].expected)
        })
        
    })

    describe('Climbing stairs Recursive approach',()=>{
        test('test cases for n=${n} should response with expected=${expected}',()=>{
            const n = 3
            expect(climbingStairsRecursive(n)).toBe(testCases[n-1].expected)
        })
        
    })

})