// @ts-nocheck
const positiveNumCountInArray = require('./positiveNumCountInArray')

describe('positiveNumCountInArray tests', () => {
  test(' array= [1,2,3,4,0]', () => {
    const array = [1, 2, 3, 4, 0]
    expect(positiveNumCountInArray(array)).toBe(4)
  })

  test(' array= [1,2,3,4,-1]', () => {
    const array = [1, 2, 3, 4, -1]
    expect(positiveNumCountInArray(array)).toBe(4)
  })

  test(' array= [1,-2,3,4,-1,5,7,9,-8]', () => {
    const array = [1, -2, 3, 4, -1, 5, 7, 9, -8]
    expect(positiveNumCountInArray(array)).toBe(6)
  })
  test(' array= [-1,-2,-3,-4]', () => {
    const array = [-1, -2, -3, -4]
    expect(positiveNumCountInArray(array)).toBe(0)
  })
})
