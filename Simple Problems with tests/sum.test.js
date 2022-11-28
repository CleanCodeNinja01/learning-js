const sum = require("./sum")

//1 + 2 == 3;

test('properly adds 2 numbers',() => {
    // expect takes anything that we want
    // functions like toBe, toBeEqual, toBeNull
    // toBe is used for your memory address, toEqual used for your value
    expect(sum(1 , 2)).toBe(3)
})