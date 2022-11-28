const clone = require('./clone-array')

test('properly clones array', () => {
    expect(clone([1,2,3])).toEqual([1,2,3])
})